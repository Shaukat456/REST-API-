const express=require('express')
const app=express()
const port =process.env.Port || 3000
const Student=require('./models/student')
const { response } = require('express')
require('./db/conn')


app.use(express.json())

// app.get('/students',(req,res)=>{
//     res.send('HELLO')
// })

// app.post('/students',(req,res)=>{
//         console.log(req.body)
//         const user=new Student(req.body);
//         user.save().then(()=>{
//             res.status(200).send(user)
//         }).catch((err)=>{
//             res.status(404).send(err)
//             console.log(err)
//         })
//     })


app.post('/students',async(req,res)=>{
  try {
      console.log(req.body)
      const user =new Student(req.body)
      const createSTD =await user.save()
      res.status(200).send(user)
      
  } catch (error) {
    res.status(404).send(error)
        
  }
  
})

app.get('/students',async (req,res)=>{
  try {
    const studentsData= await Student.find()
    res.send(studentsData)
    console.log(studentsData)
  } catch (error) {
    res.status(404).send(error)
  }
})


app.get("/students/:id",async (req,res)=>{
  try {
    const _id=req.params.id;
    const studentData=await Student.findById(_id);
    
    if(!studentData){
      return res.status(404).send();
    }
    else{
      res.status(200).send(studentData)
      console.log(studentData);;
    }
   
  } catch (error) {
    res.status(404).send(error)
    console.log(error)
  }
})


app.patch('/students:id',async (req,res)=>{
  try {
    const _id=req.params.id;
   const updatedData= await Student.findByIdAndUpdate(_id,req.body,{
      new:true
    })
    res.send(updatedData)
    // console.log(updatedData)
  } catch (err) {
    res.status(404).send(err)
    console.log(err)
  }
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

