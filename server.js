const express = require('express');
const MongoDB = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "./public")));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes')(app, {});

app.listen(port, () => {
    console.log('Server already listening on ' + port);
});