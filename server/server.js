var express = require('express');
var bodyParser = require('body-parser')


var {mongoose} = require('./db/mongoose.js');
var {User} = require('./models/user.js');
var {Todo} = require('./models/todo.js');


//////////////////////////////
// CONFIG
//////////////////////////////
var app     = express();
app.use(bodyParser.json());



//////////////////////////////
// ROUTES
//////////////////////////////


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err)
  });
});


app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});






//////////////////////////////
// GO LIVE
//////////////////////////////
app.listen(3000, () => {
  console.log('Server is up and running!')
})


module.exports = {app};
