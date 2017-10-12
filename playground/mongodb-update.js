const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');


  // findOneAndUpdate takes 4 args:
  // 1) find/filter,
  // 2) update operators and updates,
  // 3) extra options, this returns new doc instead of old doc,
  // 4) callback, but the function also returns a promise so we can use then after instead



  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59df2c991c4d711f2750bc9c")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // })
  // .then((result) => {
  //   console.log(result)
  // }, (err) => {
  //   if (err) {
  //     console.log(err)
  //   }
  // });



  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59de9dc3d35228228cdb3faa")
  }, {
    $set: {
      name: "Layla Hashemi"
    },
    $inc : {
      age: -10
    }
  }, {
    returnOriginal: false
  })
    .then((result) => {
      console.log(result)
    }, (err) => {
      if (err) {
        console.log(err)
      }
  });

  // db.close();
});
