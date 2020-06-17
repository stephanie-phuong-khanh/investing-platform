const { db } = require('../util/admin');

exports.getAllStartups = (req, res) => {
    db.collection('startups')
      .orderBy('createdAt', 'desc')
      .get()
      .then((data) => {
        let screams = [];
        data.forEach((doc) => {
          screams.push({
            startupId: doc.id,
            body: doc.data().body,
            website: doc.data().website,
            location: doc.data().location,
            createdAt: doc.data().createdAt,
            commentCount: doc.data().commentCount,
            bookmarkCount: doc.data().bookmarkCount,
            userImage: doc.data().userImage,
            pitchDeckUrl: doc.data().pitchDeckUrl,
          });
        });
        return res.json(screams);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
};
