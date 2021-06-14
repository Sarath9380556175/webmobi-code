const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const userdetails=new Schema({
    greetings:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('user',userdetails)