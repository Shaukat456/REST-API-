const mongoose=require('mongoose')
const { default: validator } = require('validator')



const StudentSchema=mongoose.Schema({
    name:{
        type:String,
        minlength:3,
    },
    email:{
        type:String,
        minlength:3,
        required:true,
        // Disabling Validation
        // validate(value){
        //     if(!validator.isEmail){
        //         throw new Error('Email is incorrect');
        //     }
            
        // }
    },
})

// Creating New Collection Using Model 
const Student=new mongoose.model('Student',StudentSchema);


module.exports=Student;