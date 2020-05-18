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

app.get("/helloWorld", (req, res) => {
    res.send("Hello from ArchAngel!");
});

app.get("/startups/:id", FBAuth, (req, res) => {
    
});

app.post("/startups/:id", )
//base url: https://baseurl.com/api

exports.api = functions.https.onRequest(app);
