const { db } = require('../util/admin');

exports.getAllStartups = (req, res) => {
    let sortBy = req.query.sortBy === "" ? "name" : req.query.sortBy;
    db.collection('startups')
      .orderBy(sortBy, 'desc')
      .get()
      .then((data) => {
        let startups = [];
        data.forEach((doc) => {
          startups.push({
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
        return res.json(startups);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
};

// Fetch one scream
exports.getStartup = (req, res) => {
    let startupData = {};
    db.doc(`/startups/${req.params.startupId}`)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return res.status(404).json({ error: 'Startup not found' });
        }
        startupData = doc.data();
        startupData.startupId = doc.id;
        return db
          .collection('comments')
          .orderBy('createdAt', 'desc')
          .where('startupId', '==', req.params.startupId)
          .get();
      })
      .then((data) => {
        startupData.comments = [];
        data.forEach((doc) => {
          startupData.comments.push(doc.data());
        });
        return res.json(startupData);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };


