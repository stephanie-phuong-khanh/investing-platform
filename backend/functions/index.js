const functions = require('firebase-functions');
const admin = require('firebase-admin');

const app = require('express')();

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');
const { FBAuth } = require('./util/auth');

const { 
    signup, 
    login, 
    addUserDetails,
    getAuthenticatedUser,
    getUserDetails,
    uploadImage,
} = require('./handlers/user');

const {
    getAllStartups,
    getStartup,
    commentOnStartup,
    bookmarkStartup,
    unbookmarkStartup
} = require('./handlers/startup');

// Startup routes
app.get('/startup/:startupId', getAllStartups);
// app.post("/startup", postOneStartup); // add startup to our DB
app.get('/startup/:startupId', getStartup);
// app.post('/startup/:startupId/pitchdeck', uploadFile);

// app.delete("/startup/:id", deleteStartup);
app.post('/startup/:startupId/comment', FBAuth, commentOnStartup);
app.post('/startup/:startupId/bookmark', FBAuth, bookmarkStartup); // favorite a startup
app.post('/startup/:startupId/unbookmark', FBAuth, unbookmarkStartup); // unfavorite a startup 

// Investors/users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);
app.get('/user/:handle', getUserDetails);

//base url: https://baseurl.com/api

exports.api = functions.https.onRequest(app);
// exports.api = functions.region('europe-west1').https.onRequest(app);

