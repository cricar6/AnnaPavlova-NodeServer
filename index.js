const express = require('express'), 
    engines = require('consolidate'),
    handlebars = require('handlebars'),
    MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;
    
var app = express(),
    db;

app.engine('hbs', engines.handlebars);
app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

handlebars.registerHelper('get_length', function(obj) {
    return obj.length*290;
});
/*
MongoClient.connect('mongodb+srv://cluster0-wiwgu.mongodb.net/annapavlova', 
{
    auth: {
        user: 'cricar',
        password: 'naitsirc_6569'
    }
}, function (err, client) {
    if (err) throw err;

    db = client.db('annapavlova');

    //app.listen(process.env.PORT || 3000);
    app.listen(3000, function () {
        console.log("servidor conectado")
    });
    
});
*/
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('annapavlova');

    // Iniciar servidor
    app.listen(3000);
});

app.get('/', (req, res) => {

    var plays = db.collection('plays')
    .find();


    if(req.query.precio) 
    plays.filter({precio: {
        $gte: parseInt(req.query.precio),
        $lte: parseInt(req.query.precio)+15000
    }});

    if(req.query.style) 
    plays.filter({style: req.query.style});
    
    if(req.query.genders) 
    plays.filter({genders: req.query.genders});



    plays.toArray((err,result) => {
        //console.log('hi server')
        res.render('index', {
            plays: result,
            
        });
    });
});

app.get('/obtenerObjectID', (req, res)=> {
    var arreglo = req.query.ids.split(',');

    arreglo = arreglo.map (function(id){
        return new ObjectID(id);
    }) ;
    var plays = db.collection('plays').find (
        {
            _id: {
                $in: arreglo
            }
        }
    ).toArray((err, result) => {
        res.send(result);
    });
})

app.get('/checkout', (req, res) => {
    res.render('checkout');
});
app.get('/obra/:direction', (req, res)=> {
    //console.log(req.params.direction);
    db.collection('plays').find (
        {
            
            direction: req.params.direction
        }
    ).toArray((err, result) => {
        //console.log(result[0]);
        res.render('play', {
            play: result[0]
        });
    });
}
);
