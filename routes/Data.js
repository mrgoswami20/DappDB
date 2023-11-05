const express=require('express')
const router=express.Router()
const {getAll,getDataOfUser,updateData,deleteData,addData}=require('../controller/Data')

router.get('/data',getAll)
router.post('/data/:userId',addData)
router.get('/data/patient/:patientId',getDataOfUser)
router.put('/data/:userId',updateData)
router.delete('/data/:userId',deleteData)

module.exports=router