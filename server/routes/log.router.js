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
  // POST route code here
});

module.exports = router;
