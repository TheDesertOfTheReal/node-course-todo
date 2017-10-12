const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');



// how to query ALL objects, uses promises, must take then function
// db.collection('Todos').find().toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     if (err) {
//       console.log('Unable to fetch todos', err);
//     }
//   });


// how to query objects with a certain ID, must turn string into
// new ObjectID constructor or it will not work
// db.collection('Todos').find({
//   _id: new ObjectID("59de9ac97bff83228cba5c04")
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     if (err) {
//       console.log('Unable to fetch todos', err);
//     }
// });



// way to count how many docs are in the collection
// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`)
//   }, (err) => {
//     console.log(err)
// });


db.collection('Users').find({name: 'Jacob Brendan McCarthy'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2))
}, (err) => {
  console.log(err)
});



  // db.close();
});
