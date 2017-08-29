// run webpack: npm run webpack
// run app: node server.js

// PACKAGES //
var path = require('path');
var fs = require('fs');
var express = require('express');

// CREATE ENGINE //
var app = express();

// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', (path, options, callback)=>{
    fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE //
app.use(express.static(__dirname));

// ROUTES // 
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ERROR HANDLE //
app.use(function(err, req, res, next){
    res.status(err.status || 500);
});


app.listen(8000, ()=>{ console.log('running on port 8000')});
