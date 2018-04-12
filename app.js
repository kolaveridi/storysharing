const express=require('express');
const mongoose=require('mongoose');
const passport=require('passport');
const exphbs=require('express-handlebars');
const app=express();
//load user model
require('./models/User');
//passport config
require('./config/passport')(passport);
//port setup
const port=process.env.PORT || 3000;
//load routes
const auth=require('./routes/auth');
const index=require('./routes/index');
//map global promises
mongoose.Promise=global.Promise;
//mongoose conncet
const keys=require('./config/keys');
mongoose.connect(keys.mongoURI,{
})
.then(()=>console.log('MongoDb connected'))
.catch(err=>console.log(err));
//where to get redirected to
//use routes
app.use('/auth',auth);//anything with auth will go to auth.js
app.use('/',index);//anytghing that starts withh / will go to index
//handlebars middleware
app.engine('handlebars',exphbs({
  defaultLayout:'main'
}));
app.set('view engine','handlebars');

app.listen(port,()=>{
  console.log(`Server started on ${port}`);
});
