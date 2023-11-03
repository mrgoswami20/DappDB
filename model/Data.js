const mongoose=require('mongoose')

const dataSchema=new mongoose.Schema({
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String
    },
    bloodGroup:{
        type:String
    },
    description:{
        type:String,
        require:true
    }
})