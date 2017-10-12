const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');


  //deleteMany
  // db.collection('Todos').deleteMany({text: "Send favorite photos to Laura"}).then((result) => {
  //   console.log(result)
  // }, (err) => {
  //   if (err) {
  //     console.log(err)
  //   }
  // });


  //deleteOne
  // db.collection('Todos').deleteOne({text: "Read Nietzsche"}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });


  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // }, (err) => {
  //   if (err) {
  //     console.log(err)
  //   }
  // });


  // db.collection('Users').deleteMany({name: 'Jacob Brendan McCarthy'}).then((result) => {
  //   console.log(result)
  // }, (err) => {
  //   if (err) {
  //     console.log(err)
  //   }
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59dea7c71fa2dc0e84d98ebd')
  }).then((result) => {
    console.log(result)
  }, (err) => {
    if (err) {
      console.log(err)
    }
  });


  // db.close();
});
