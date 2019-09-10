const express = require('express');
const app = express();

app.use(express.json());

app.listen(8002, function() {
  console.log('World API listening on port 8002');
});

const db = require('./db.js');
