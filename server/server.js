var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');


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

// INDEX
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err)
  });
});


// CREATE
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


// SHOW
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(400).send('Bad Request: Invalid ID');
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send('Could not find todo');
    }
    res.send({todo})
  }).catch((e) => {
    res.status(400).send();
  });
});






//////////////////////////////
// GO LIVE
//////////////////////////////
app.listen(3000, () => {
  console.log('Server is up and running!')
})


module.exports = {app};
