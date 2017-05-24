"use strict";

const express = require('express');
const index = require('./routes');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);

app.listen(3000);
