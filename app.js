var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;
var mongodb = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  db.collection('employees').find().toArray(function(err, results) {
    res.render('index', {employees:results})
  })
});

app.post('/', (req,res) => {
  let employee = req.body;
  console.log(employee);
  db.collection('employees').insert(employee);
  res.redirect('/');

});


mongodb.connect('mongodb://ken:123@ds135983.mlab.com:35983/employer',(err, database) => {
  if (err) {
    return console.log(err)
  }
  db = database;
  app.listen(port, () => {
    console.log('server connected');
  });

});
