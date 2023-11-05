const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const mongoose=require('mongoose')
const user=require('./routes/User')
const data=require('./routes/Data')
const cors=require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


const dbURL = 'mongodb+srv://ashishkamat3:project@cluster0.yuvwz7z.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then (
    console.log("connected to db")
).catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.send("hello world!")
})

app.use('/api',user)
app.use('/api',data)

app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})