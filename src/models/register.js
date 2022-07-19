const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email :{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },

}) 

const Register = new mongoose.model('data',mongooseSchema);

module.exports = Register;