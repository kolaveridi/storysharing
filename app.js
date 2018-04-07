const express=require('express');
const mongoose=require('mongoose');
const app=express();
const passport=require('passport');
//passport config
require('./config/passport')(passport);
//port setup
const port=process.env.PORT || 3000;
//load routes
const auth=require('./routes/auth');


app.get('/',(req,res)=>{
  res.send('It works');
});
//use routes
app.use('/auth',auth);//anything with auth will go to auth.js

app.listen(port,()=>{
  console.log(`Server started on ${port}`);
});
