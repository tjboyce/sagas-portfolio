const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT id, "name", "description", "thumbnail", "website", "github", "date_completed", "tag_id" FROM projects';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT plant query', err);
            res.sendStatus(500);
        });
});

module.exports=router; 