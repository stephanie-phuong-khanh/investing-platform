import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDPR8ZDKue0Enu1pDViqj5qpe9lh-e4600',
	authDomain: 'archangel-bda83.firebaseapp.com',
	databaseURL: 'https://archangel-bda83.firebaseio.com',
	projectId: 'archangel-bda83',
	storageBucket: 'archangel-bda83.appspot.com',
	messagingSenderId: '876385778886',
	appId: '1:876385778886:web:07424f8b6726f1d4576bc7',
	measurementId: 'G-FL087CZK3Y',
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		this.auth = app.auth();
		this.db = app.database;

		this.googleProvider = new app.auth.GoogleAuthProvider();
	}

	// *** Auth API ***

	// *** Email & Password
	doCreateUserWithEmailAndPassword = (email, password) => {
		this.auth.createUserWithEmailAndPassword(email, password);
	};

	doSignInWithEmailAndPassword = (email, password) => {
		this.auth.signInWithEmailAndPassword(email, password);
	}

	doSignOut = () => {
		this.auth.signOut();
	}

	doPasswordReset = (email) => {
		this.auth.sendPasswordResetEmail(email);
	}
	doPasswordUpdate = (password) => {
		if (this.auth.currentUser != null) this.auth.currentUser.updatePassword(password);
	}

	doSignInWithGoogle = () => {
		this.auth.signInWithPopup(this.googleProvider);
	}
}
export default Firebase;
