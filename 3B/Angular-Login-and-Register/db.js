var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://man3749:man3749@cluster0.jq3jt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

exports.mongoose=mongoose;

var registers = mongoose.Schema({
  name:String,
  email:String,
  password:String,
  phonenumber:String,
  createDate: {
    type: Date,
    default: Date.now
  }
})

exports.User = mongoose.model('User',registers,'users');
