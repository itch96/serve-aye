const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

let secret = require('../config/secret');

passport.use(
  new GoogleStrategy(
    {
      clientID: secret.google.clientID,
      clientSecret: secret.google.clientSecret,
      callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }, (err, user) => {
        if(err) {
          console.log(err);
          done(err);
        }
        if(user) {
          done(null, user);
        } else {
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);