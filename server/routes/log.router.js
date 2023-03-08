const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('log server GET route');
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
 * POST route template
 */
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
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
        console.log('new log created', result.row[0].id);
      })
      .catch((error) => {
        console.table('unable to create entry at this time');
        res.sendStatus(500);
      });
  }
});

module.exports = router;
