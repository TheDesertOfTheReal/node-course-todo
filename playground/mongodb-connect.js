// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');


  // db.collection('Todos').insertOne({
  //   text: 'Go see Leviathan at 4:30',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  // db.collection('Users').insertOne({
  //   name: 'Jacob Brendan McCarthy',
  //   age: 24,
  //   location: 'Bologna, Italia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user to mongodb')
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
  // })

  // var user = {name: 'Jake', age: 24};
  // var {name} = user;
  // console.log(name);

  // var obj = new ObjectID();
  // console.log(obj);


  db.close();
});
