const mongoose=require('mongoose')

const dataSchema=new mongoose.Schema({
    
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
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

const Data=mongoose.model("Data",dataSchema)
module.exports=Data
