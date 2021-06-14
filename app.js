const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors');

const host='localhost';

const port=2027;

const routes=require('./routes/index')

const app=express();

app.use(cors());

app.use(express.json());

app.use('/',routes)

mongoose.connect('mongodb+srv://BujalaSarathKumarReddy:12345abcd@cluster0.nud0w.mongodb.net/WebMobi?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true } ,()=>{
    app.listen(port,host,()=>{
        console.log(`Server is running at ${host} : ${port}`)
    })
})