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
  // GET route code here
  console.log('log.router server GET route');
  if (req.isAuthenticated()) {
    let queryText = 'SELECT * FROM "log" WHERE "user_id" = $1;';
    pool
      .query(queryText, [req.user.id])
      .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('error with retrieving user logs');
        res.sendStatus(500);
      });
  }
});

/**
 * POST route log
 */
router.post('/', (req, res) => {
  console.log('in the log router'); // check router
  if (req.isAuthenticated()) {
    console.log('is authenticated'); // to check authenication

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
        // console.log('new log created', result.row[0].id);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('unable to create entry at this time');
        res.sendStatus(500);
      });
  }
});

module.exports = router;
