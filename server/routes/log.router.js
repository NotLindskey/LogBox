const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.table('in the server GET Log!');
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
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('something');
  const title = req.body.title;
  const date = req.body.date;
  const entry = req.body.entry;

  const queryText = `INSERT INTO "log" (date, entry, title)
  VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [date, entry, title])
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.table('unable to create entry at this time');
      res.sendStatus(500);
    });
});

module.exports = router;
