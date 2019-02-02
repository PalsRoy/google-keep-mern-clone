
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var connectionUrl = require('./config/keys').mongoDBURI;
var setup = require('./routes/api/setup');
var todos = require('./routes/api/todos');

var app = express();

var port = process.env.PORT || 5000;

mongoose.connect(connectionUrl,{ useNewUrlParser: true })
.then(()=> console.log("Connected to the MongoDatabase"))
.catch(err => console.log("Error connecting to the database"));

//@register middleware for bodyParser which transforms form data into req.body as json objects
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//data seeding for todos
//app.use('/api/setup',setup);
//app.use('/api/setup',setup);
app.use('/api/todos/',todos);

//serve public assets
app.use('/assets', express.static(__dirname + '/public'));

//Setup template engine ejs
app.set('view engine', 'ejs');

//health check url
app.get('/', function(req,res){
  res.send("Its Working: " + req.url);
});

app.listen(5000);//creating the node webserver which listens on port 3000
