const express=require('express')
const router=express.Router()
const {getAUser,getAllUser,addUser,updateUser,deleteUser}=require('../controller/User')

router.post('/user',addUser)
router.get('/user',getAllUser)
router.get('/user/:userId',getAUser)
router.put('/user/:userId',updateUser)
router.delete('/user/:userId',deleteUser)

module.exports=router