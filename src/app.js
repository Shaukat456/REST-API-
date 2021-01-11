const express=require('express')
const app=express()
const port =process.env.Port || 3000
const Student=require('./models/student')
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


app.listen(port,()=>{
    console.log('server is running')
})

