// run webpack: npm run webpack
// run app: node server.js

// PACKAGES //
var path = require('path'); 
var fs = require('fs');
var express = require('express');

// IMPORT ROUTES //
var indexRoutes = require('./routes/index.js');

// CREATE ENGINE //
var app = express();

// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', (path, options, callback)=>{
    fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../client')));

// ROUTES //
app.use ('/', indexRoutes);


// ERROR HANDLE //
app.use(function(err, req, res, next){
    res.status(err.status || 500);
});


// SERVE APP //
module.exports = app;
