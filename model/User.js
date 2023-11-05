const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    address:{
        type:String,
        default:true
    }
})
const User=mongoose.model("User",userSchema)
module.exports=User