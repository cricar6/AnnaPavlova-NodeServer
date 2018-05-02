const express = require('express'), 
    engines = require('consolidate'),
    handlebars = require('handlebars'),
    MongoClient = require('mongodb').MongoClient;
    //ObjectID = require('mongodb').ObjectID;
    
var app = express(),
    db;

app.engine('hbs', engines.handlebars);
app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('annapavlova');

    app.listen(3000);
});

app.get('/', (req, res) => {

    var plays = db.collection('plays')
    .find();

    plays.toArray((err,result) => {
        console.log('hi server')
        res.render('index', {
            plays: result
        });
    });
});

app.get('/obra/:name', (req, res)=> {
    db.collection('plays').find (
        {
            name: req.param.name
        }
    ).toArray((err, result) => res.send(result))
}
);
