 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 const UserSchema = new Schema({
     name: {
         type: String,
         required: true,
     },
     email: {
         type: String,
         required: true,
     },
     phoneNumber: {
         type: String,
         required: true,
     },
     password: {
         type: String,
         required: true,
     }

 }, {
     timestamps: true
 });

 module.exports = mongoose.model('User', UserSchema);