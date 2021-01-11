const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/ReApi",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(()=>{
    console.log('Connected Successfully')
}).catch(()=>{
    console.log('Connection Failed')
})


