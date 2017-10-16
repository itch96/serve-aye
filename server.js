'use strict'
//-----------LIBRARIES---------------
const express = require('express');
let app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');


//-------------FILES-----------------
let secret = require('./config/secret');
let User = require('./models/User');
require('./services/passport');
let authRoutes = require('./routes/authRoutes');

mongoose.connect(secret.mongoURI, (err) => {
  if(err) {console.log(err);}
  else {console.log('Database Connected');}
});

//----------MIDDLEWARES--------------
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [secret.cookieSessionKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


//------------ROUTES---------------
app.use(authRoutes);


//------------LISTENING------------
app.listen(secret.PORT, (err) => {
  if(err) console.log(err);
  console.log(`Server running on port ${secret.PORT}`);
});