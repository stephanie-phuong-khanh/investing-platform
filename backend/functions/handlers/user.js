const { admin, db } = require('../util/admin');

const config = require('../util/config');
const { uuid } = require('uuidv4');

const firebase = require('firebase');
firebase.initializeApp(config);

const { validateSignupData, validateLoginData, reduceUserDetails } = require('../util/validators');

// Sign users up
exports.signup = (req, res) => {
	const newUser = {
		email: req.body.email,
		password: req.body.password,
		confirmPassword: req.body.confirmPassword,
		handle: req.body.handle,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phoneNumber: req.body.phoneNumber,
		linkedinUrl: req.body.linkedinUrl,
		// type: req.body.type,
	};

	const { valid, errors } = validateSignupData(newUser);

	if (!valid) return res.status(400).json(errors);

	const noImg = 'no-img.png'; // default profile picture
	const noImgToken = 'a9cc0fa5-9027-4789-bba6-70625eb61796';

	let token, userId;
	db.doc(`/users/${newUser.handle}`)
		.get()
		.then((doc) => {
			if (doc.exists) {
				return res.status(400).json({ handle: 'this handle is already taken' });
			} else {
				return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
			}
		})
		.then((data) => {
			userId = data.user.uid;
			return data.user.getIdToken();
		})
		.then((idToken) => {
			token = idToken;
			const userCredentials = {
				handle: newUser.handle,
				email: newUser.email,
				createdAt: new Date().toISOString(),
				imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media&token=${noImgToken}`,
				userId,
			};
			return db.doc(`/users/${newUser.handle}`).set(userCredentials);
		})
		.then(() => {
			return res.status(201).json({ token });
		})
		.catch((err) => {
			console.error(err);
			if (err.code === 'auth/email-already-in-use') {
				return res.status(400).json({ email: 'Email is already is use' });
			} else {
				return res.status(500).json({ general: 'Something went wrong, please try again' });
			}
		});
};
// Log user in
exports.login = (req, res) => {
	const user = {
		email: req.body.email,
		password: req.body.password,
	};

	const { valid, errors } = validateLoginData(user);

	if (!valid) return res.status(400).json(errors);

	firebase
		.auth()
		.signInWithEmailAndPassword(user.email, user.password)
		.then((data) => {
			return data.user.getIdToken();
		})
		.then((token) => {
			return res.json({ token });
		})
		.catch((err) => {
			console.error(err);
			// auth/wrong-password
			// auth/user-not-user
			return res.status(403).json({ general: 'Wrong credentials, please try again' });
		});
};

// Add user details
exports.addUserDetails = (req, res) => {
	let userDetails = reduceUserDetails(req.body);

	db.doc(`/users/${req.user.handle}`)
		.update(userDetails)
		.then(() => {
			return res.json({ message: 'Details added successfully' });
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({ error: err.code });
		});
};
// Get any user's details
exports.getUserDetails = (req, res) => {
	let userData = {};
	db.doc(`/users/${req.params.handle}`)
		.get()
		.then((doc) => {
			if (doc.exists) {
				userData.user = doc.data();
				return db
					.collection('startups')
					.where('userHandle', '==', req.params.handle)
					.orderBy('createdAt', 'desc')
					.get();
			} else {
				return res.status(404).json({ errror: 'User not found' });
			}
		})
		.then((data) => {
			userData.startups = [];
			data.forEach((doc) => {
				userData.startups.push({
					startupId: doc.id,
					body: doc.data().body,
					website: doc.data().website,
					location: doc.data().location,
					createdAt: doc.data().createdAt,
					commentCount: doc.data().commentCount,
					bookmarkCount: doc.data().bookmarkCount,
					pitchDeckUrl: doc.data().pitchDeckUrl,
				});
			});
			return res.json(userData);
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({ error: err.code });
		});
};
// Get own user details
exports.getAuthenticatedUser = (req, res) => {
	let userData = {};
	db.doc(`/users/${req.user.handle}`)
		.get()
		.then((doc) => {
			if (doc.exists) {
				userData.credentials = doc.data();
				return db.collection('likes').where('userHandle', '==', req.user.handle).get();
			}
			return res.json(userData);
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({ error: err.code });
		});
};
// Upload a profile image for user
exports.uploadImage = (req, res) => {
	const BusBoy = require('busboy');
	const path = require('path');
	const os = require('os');
	const fs = require('fs');

	const busboy = new BusBoy({ headers: req.headers });

	let imageToBeUploaded = {};
	let imageFileName;
	// String for image token
	let generatedToken = uuid();

	busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
		console.log(fieldname, file, filename, encoding, mimetype);
		if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
			return res.status(400).json({ error: 'Wrong file type submitted' });
		}
		// my.image.png => ['my', 'image', 'png']
		const imageExtension = filename.split('.')[filename.split('.').length - 1];
		// 32756238461724837.png
		imageFileName = `${Date.now()}.${imageExtension}`;
		const filepath = path.join(os.tmpdir(), imageFileName);
		imageToBeUploaded = { filepath, mimetype };
		file.pipe(fs.createWriteStream(filepath));
	});
	busboy.on('finish', () => {
		admin
			.storage()
			.bucket()
			.upload(imageToBeUploaded.filepath, {
				resumable: false,
				metadata: {
					metadata: {
						contentType: imageToBeUploaded.mimetype,
						//Generate token to be appended to imageUrl
						firebaseStorageDownloadTokens: generatedToken,
					},
				},
			})
			.then(() => {
				// Append token to url
				const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media&token=${generatedToken}`;
				return db.doc(`/users/${req.user.handle}`).update({ imageUrl });
			})
			.then(() => {
				return res.json({ message: 'image uploaded successfully' });
			})
			.catch((err) => {
				console.error(err);
				return res.status(500).json({ error: 'something went wrong' });
			});
	});
	busboy.end(req.rawBody);
};

//TODO: need to test, this is a better version of uploading files in general
exports.uploadProfilePic = async (req, res) => {
	try {
		if (!req.files) {
			return res.status(400).json({ general: 'No file uploaded!' });
		} else {
			let profilePic = req.files.avatar;

			// Create a Storage Ref w/ username
			var storageRef = firebase
				.storage()
				.ref(req.user.handle + '/profilePicture/' + file.name)
				.put(profilePic);
			// Listen for state changes, errors, and completion of the upload.
			uploadTask.on(
				firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
				function (snapshot) {
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: // or 'paused'
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: // or 'running'
							console.log('Upload is running');
							break;
					}
				},
				function (error) {
					// A full list of error codes is available at
					// https://firebase.google.com/docs/storage/web/handle-errors
					switch (error.code) {
						case 'storage/unauthorized':
							// User doesn't have permission to access the object
							break;

						case 'storage/canceled':
							// User canceled the upload
							break;

						case 'storage/unknown':
							// Unknown error occurred, inspect error.serverResponse
							break;
          }
          return res.status(500).json({ error: 'something went wrong' });
				},
				function () {
					// Upload completed successfully, now we can get the download URL
					uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
						console.log('File available at', downloadURL);
						return db.doc(`/users/${req.user.handle}`).update({ downloadURL });
					});
        },
        function () {
          return res.json({ message: 'image uploaded successfully' });
        }
			);
		}
	} catch (err) {
		res.status(500).send(err);
	}
};
