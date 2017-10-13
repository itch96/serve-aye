'use strict'
//-----------LIBRARIES---------------
const express = require('express');
let app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//-------------FILES-----------------
let secret = require('./config/secret');

//----------MIDDLEWARES--------------
passport.use(new GoogleStrategy());

//------------ROUTES---------------
app.get('/', (req, res) => {
  res.send('Hello there again');
});

//------------LISTENING------------
app.listen(secret.PORT, (err) => {
  if(err) console.log(err);
  console.log(`Server running on port ${PORT}`);
});