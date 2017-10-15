'use strict'
//-----------LIBRARIES---------------
const express = require('express');
let app = express();
const mongoose = require('mongoose');


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


//------------ROUTES---------------
app.use(authRoutes);

//------------LISTENING------------
app.listen(secret.PORT, (err) => {
  if(err) console.log(err);
  console.log(`Server running on port ${secret.PORT}`);
});