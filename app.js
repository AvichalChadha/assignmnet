const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('express').Router()
const data_model = require("./Models/model");
const keys = require("./config/keys");

//const router = Router()

mongoose.connect(keys.mongodb.dbURI, function(err){
    if (err){
        //console.log(err)
        console.log("error connecting to database.Check credentials")
    }
    else{
        console.log("connected to mongo")
    }
    
})

// Init App
var app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users_routes = require('./routes/users');
app.use('/api', users_routes);









const PORT = 4000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


