const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');
const { FBAuth } = require('./util/auth');



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.get("/startup/:startupId", getAllStartups);
app.post("/startup", postOneStartup); // add startup to our DB
app.get("/startup/:startupId", getStartup);
app.post('/startup/:startupId/pitchdeck', uploadFile);

// app.delete("/startup/:id", deleteStartup);
app.post('/startup/:startupId/comment', FBAuth, commentOnStartup);
app.post('/startup/:startupId/bookmark', FBAuth, bookmarkStartup); // favorite a startup
app.post('/startup/:startupId/unbookmark', FBAuth, unbookmarkStartup); // unfavorite a startup 


// Scream routes
// app.get('/screams', getAllScreams);
// app.post('/scream', FBAuth, postOneScream);
// app.get('/scream/:screamId', getScream);
// app.delete('/scream/:screamId', FBAuth, deleteScream);
// app.get('/scream/:screamId/like', FBAuth, likeScream);
// app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);
// app.post('/scream/:screamId/comment', FBAuth, commentOnScream);

//base url: https://baseurl.com/api

// exports.api = functions.https.onRequest(app);
exports.api = functions.region('europe-west1').https.onRequest(app);

