const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    email:{type:String,unique:true,required:true,trim:true},
    password:{type:String,required:true}
},{ timestamp:true, });


const User = mongoose.model('User',userSchema);
module.exports = User;