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

exports.commentOnStartup = (req, res) => {
    if (req.body.body.trim() === '')
    return res.status(400).json({ comment: 'Must not be empty' });

  const newComment = {
    body: req.body.body,
    createdAt: new Date().toISOString(),
    startupId: req.params.startupId,
    userHandle: req.user.handle,
    // userImage: req.user.imageUrl  TODO: finish this shit 
  };
  console.log(newComment);

  db.doc(`/startups/${req.params.startupId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Startup not found' });
      }
      return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
    })
    .then(() => {
      return db.collection('comments').add(newComment);
    })
    .then(() => {
      res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
}

exports.bookmarkStartup = (req, res) => {
    const likeDocument = db
    .collection('likes')
    .where('userHandle', '==', req.user.handle)
    .where('startupId', '==', req.params.startupId)
    .limit(1);

  const startupDocument = db.doc(`/startups/${req.params.startupId}`);

  let startupData;

  startupDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        startupData = doc.data();
        startupData.startupId = doc.id;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: `Startup with ID ${doc.id} not found` });
      }
    })
    .then((data) => {
      if (data.empty) {
        return db
          .collection('likes')
          .add({
            startupId: req.params.startupId,
            userHandle: req.user.handle
          })
          .then(() => {
            startupData.likeCount++;
            return startupDocument.update({ likeCount: startupData.likeCount });
          })
          .then(() => {
            return res.json(startupData);
          });
      } else {
        return res.status(400).json({ error: 'Startup already bookmarked' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
}

exports.unbookmarkStartup = (req, res) => {
    const likeDocument = db
    .collection('likes')
    .where('userHandle', '==', req.user.handle)
    .where('startupId', '==', req.params.startupId)
    .limit(1);

  const startupDocument = db.doc(`/startups/${req.params.startupId}`);

  let startupData;

  startupDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        startupData = doc.data();
        startupData.startupId = doc.id;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: 'Startup not found' });
      }
    })
    .then((data) => {
      if (data.empty) {
        return res.status(400).json({ error: 'Startup not liked' });
      } else {
        return db
          .doc(`/likes/${data.docs[0].id}`)
          .delete()
          .then(() => {
            startupData.likeCount--;
            return startupDocument.update({ likeCount: startupData.likeCount });
          })
          .then(() => {
            res.json(startupData);
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
}


