const express=require('express');


const router=express.Router();

const usercontroller=require('../controllers/user')

router.get('/', usercontroller.getuserdetails)



module.exports=router;