const express=require('express');
const router=express.Router();
const passport=require('passport');


router.get('/google',passport.authenticate('google',
{scope:['profile','email']}
));
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res,err) {
    if (err.name === 'TokenError') {
     res.redirect('/google'); // redirect them back to the login page
   }
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });
module.exports=router;
