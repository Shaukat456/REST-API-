const mongoose=require('mongoose')
const { default: validator } = require('validator')



const StudentSchema=mongoose.Schema({
    name:{
        type:String,
        minlength:3,
    },
    email:{
        type:String,
        minlength:5,
        required:true,
        // validate(value){
        //     if(!validate.isEmail){
        //         throw new Error('Email is incorrect');
        //     }
        // }
    },
})


// Creating New Collection Using Model 

const Student=new mongoose.model('Student',StudentSchema);


module.exports=Student;