const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
const myPortfolio = [1, 2, 3];

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "projects";'
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT projects query', err);
            res.sendStatus(500);
        });
        
});

router.post('/', (req, res) => {
    const projects = req.body;
  
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        projects.name,
        projects.description,
        projects.thumbnail,
        projects.website,
        projects.github,
        projects.date_completed,
        projects.tag,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT projects query', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {

    console.log(req.params);

    const queryText = 'DELETE FROM projects WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE projects query', err);
            res.sendStatus(500);
        });
});

module.exports=router; 

// "tags"."name" AS "tag_name", "projects"."name" AS "project_name" FROM "projects" JOIN "tags" ON "projects"."tag_id" = "tags"."id"';