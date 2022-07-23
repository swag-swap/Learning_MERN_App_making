const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true,
        minlength:8
    },
    username:{
        type:String
    }
})

User = mongoose.model('user',userSchema)