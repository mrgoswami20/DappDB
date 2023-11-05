const mongoose = require("mongoose");


const PData = new mongoose.Schema({
    walletAddress:{
        type:String,
        required:true,
        unique: true,
    },
    patientData:{
        type:String,
        required: true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('PData', PData);