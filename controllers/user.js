 const user=require('../modals/user')
 
 
 exports.getuserdetails=(req,res)=>{

    user.find()

    .then(response=>res.status(200).json({message:'details fetched successgully', user:response}))

     .catch(err=>res.status(500).json({error:err}))
 }


