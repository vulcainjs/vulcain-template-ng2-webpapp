"use strict";

var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));

app.use(express.static('./dist'));

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});
