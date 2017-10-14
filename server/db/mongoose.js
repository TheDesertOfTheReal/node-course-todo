var mongoose = require('mongoose')


// Mongoose is up and running using promises
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');




module.exports = {
mongoose
}
