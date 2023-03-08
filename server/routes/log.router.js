const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route logs
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.table('log.router server GET route');
  if (req.isAuthenticated()) {
    let queryText = 'SELECT * FROM "log" WHERE "user_id" = $1;';
    pool
      .query(queryText, [req.user.id])
      .then((result) => {
        console.table(result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.table('error with retrieving user logs');
        res.sendStatus(500);
      });
  }
});

/**
 * POST route log
 */
router.post('/', (req, res) => {
  console.table('in the log post router'); // check router
  if (req.isAuthenticated()) {
    console.table('is authenticated'); // check authenticated

    const queryText = `INSERT INTO "log" ("user_id", "date", "entry", "title")
    VALUES ($1, $2, $3, $4)`;
    pool
      .query(queryText, [
        req.user.id,
        req.body.date,
        req.body.entry,
        req.body.title,
      ])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.table('unable to create log entry at this time');
        res.sendStatus(500);
      });
  }
});

module.exports = router;
