const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    address:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})
const User=mongoose.model("User",userSchema)
module.exports=User