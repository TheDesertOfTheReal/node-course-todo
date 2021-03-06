var {mongoose} = require('../db/mongoose.js');


var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
  }
});


var User = mongoose.model('User', userSchema);


module.exports = {User};
