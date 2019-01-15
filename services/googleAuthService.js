// Store all request services here and identify passport
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

// serialize user will grab the unique id from mongoDB
passport.serializeUser((user,done)=>{
    done(null,user.id); //user here refers to the user instance below.  user.id is the shortcut to unique id in mongodb for serialization
});

passport.deserializeUser((id, done)=>{
    User.findById(id)
        .then(user=>{
            done(null, user);
        });
})

//https://console.developers.google.com

passport.use(
    new googleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback' //to any route you define
        },
        function(accessToken, refreshToken, profile, done){
            // find the input id in our database, if none found, then register
            User.findOne({googleId : profile.id})
                .then(existingUser =>{
                    if(existingUser){
                        console.log(`User already registered and it is: ${existingUser}`);
                        done(null, existingUser);
                    }else{
                        new User({googleId: profile.id})
                        .save()
                        .then(user=> done(null, user));
                    }
                });
            // console.log(`accessToek: ${accessToken}`);
            // console.log(`refresh token: ${refreshToken}`);
            // console.log(`Google Profile: ${profile}`);
        }
    )
);

