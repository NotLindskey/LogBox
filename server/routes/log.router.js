const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET all logs rows route
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.table('log.router server GET route'); // check get router
  if (req.isAuthenticated()) {
    // check authenticated
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
 * POST newly created single log row route
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('in the log post router'); // check post router
  if (req.isAuthenticated()) {
    // check authenticated
    console.log('is authenticated, post made');

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
        console.log('unable to create log entry at this time');
        res.sendStatus(500);
      });
  }
});

// DELETE single log row route
router.delete('/:deleteLog', rejectUnauthenticated, (req, res) => {
  console.log('in the delete log router', req.params); // check router
  console.log('PARAMS: ', req.params);
  // const userID = req.params.user_id;
  const userID = req.user.id;
  // const deleteRow = req.params.id;

  const deleteRow = req.params.deleteLog;

  console.log('PARAMS UserID: ', userID);
  console.log('PARAMS: DeleteRow', deleteRow);
  if (req.isAuthenticated()) {
    // check authenticated
    console.log('is authenticated, delete made');

    // const queryText = `DELETE FROM "log" WHERE "user_id" = $1 AND "id" = ${req.params.deleteLog};`;
    const queryText = `DELETE FROM "log" WHERE "user_id" = $1 AND "id" = $2;`;

    pool
      .query(queryText, [userID, deleteRow])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log('unable to delete log at this time', error);
        res.sendStatus(500);
      });
  }
});

module.exports = router;
