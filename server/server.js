var express = require('express');
var bodyParser = require('body-parser')


var {mongoose} = require('./db/mongoose.js');
var {User} = require('./models/user.js');
var {Todo} = require('./models/Todo.js');


//////////////////////////////
// CONFIG
//////////////////////////////
var app     = express();
app.use(bodyParser.json());



//////////////////////////////
// ROUTES
//////////////////////////////


app.get('/todos', (req, res) => {
  res.send('this will a get route for a resource page called todos')
});


app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
    console.log('Successfully saved to database', doc);
  }, (err) => {
    res.status(400).send(err);
    console.log(err);
  });
});






//////////////////////////////
// GO LIVE
//////////////////////////////
app.listen(3000, () => {
  console.log('Server is up and running!')
})
