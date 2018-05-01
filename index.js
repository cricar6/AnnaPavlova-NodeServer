const express = require('express'), 
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient;
    //ObjectID = require('mongodb').ObjectID;
    
var app = express(),
    db;

app.engine('hbs', engines.handlebars);
app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('annapavlova');

    app.listen(3000);
});

app.get('/', (req, res) => {
    res.render('index');
    
});