var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var myPort = 8081;

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "POST", "GET");
  next();
});

//turn the server into an API server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var animals = [
  "puppy",
  "kitten",
  "ferocious bear",
  "penguin",
  "tiger",
  "bunny"
]

app.get("/animals", function(req, res){
  res.send(animals);
});

var businesses = [

  {"id":1,"busname":"Carter Grange", "image":'images/carter.jpeg', "jobs":5},
  {"id":2,"busname":"Juggarnort", "image":'images/juggarnort.jpeg', "jobs":8},
  {"id":3,"busname":"Joel's Site Labour", "image":'images/01.jpg', "jobs":11},
  {"id":4,"busname":"Carter Grange", "image":'images/carter.jpeg', "jobs":7},
  {"id":5,"busname":"Juggarnort", "image":'images/juggarnort.jpeg', "jobs":5},
  {"id":6,"busname":"Jazzy's Caulking", "image":'images/caulking6.jpg', "jobs":3}

];

app.get("/bus", function(req, res){
  res.send(businesses);
});

app.post('/bus', function(req, res){
  var business = req.body;
  console.log(req.body);
  businesses.push(business);
  res.status(200).send("Successfully posted business");
});

// Jobs
var jobs = [

  {"id":1,"busname":"Carter Grange", "image":'images/plumbing.jpg', "job_cat":"plumbing"},
  {"id":2,"busname":"Juggarnort", "image":'images/painting.jpeg', "job_cat":"painting"},
  {"id":3,"busname":"Carter Grange", "image":'images/carpentry.jpeg', "job_cat":"carpentry"},
  {"id":4,"busname":"Carter Grange", "image":'images/electrical.jpeg', "job_cat":"electrician"},
  {"id":5,"busname":"Carter Grange", "image":'images/coder.png', "job_cat":"coder"},
  {"id":6,"busname":"Carter Grange", "image":'images/baker.jpeg', "job_cat":"baker"}

];

app.get("/jobs", function(req, res){
  res.send(jobs);
});

app.post('/jobs', function(req, res){
  var job = req.body;
  console.log(req.body);
  jobs.push(job);
  res.status(200).send("Successfully posted job!");
});

//Ingredients
var ingredients = [

  {"id":1,"text":"tomato"},
  {"id":2,"text":"Ham"},
  {"id":3,"text":"cheese"},
  {"id":4,"text":"banana"}
];

app.get("/ingredients", function(req, res){
  res.send(ingredients);
});



var dir =  process.cwd();
console.log('PWDirectory...' + dir);
app.use('/current', express.static(dir + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World from Node Express!' + app.get('port'));
});


app.listen(myPort, function () {
  console.log('Server listening on port...' + app.get('port'));
  console.log('Directory...' + __dirname);
});

console.log("Working directory - " + __dirname);
app.set('port', process.env.PORT || myPort);
app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
