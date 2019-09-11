const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

function handleError(err, req, res) {
    if (err.errno === 3819) err.code = "ER_CHECK_CONSTRAINT_VIOLATED";
    console.error(`${err.errno} (${err.code}) : ${err.sqlMessage}`);
    res.status(500).send({
        message: 'Database error. ' + err.sqlMessage
    });
}

app.get('/', function(req, res) {
        res.send(200);
    });

app.get('/roles', function(req, res) {
    db.getAllRoles(function(err, rows) {
        if (err) return handleError(err, req, res);
        res.send(rows);
    });
});

app.get('/families', function(req, res) {
    db.getAllJobFamilies(function(err, rows) {
        if (err) return handleError(err, req, res);
        res.send(rows);
    });
});

app.get('/capabilities', function(req, res) {
  db.getAllCapabilities(function(err, rows) {
      if (err) return handleError(err, req, res);
      res.send(rows);
  });
});

app.get('/bands', function(req, res) {
  db.getAllBands(function(err, rows) {
      if (err) return handleError(err, req, res);
      res.send(rows);
  });
});

app.get('/bands/:id', (req,res) => {
    db.getBand(req.params.id, (err,row) => {
        if(err) return handleError(err);
        res.send(row[0]);
    });
});

app.listen(8002, function() {
    console.log('Server listening on port 8002');
});
