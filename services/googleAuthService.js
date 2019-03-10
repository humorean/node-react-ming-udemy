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

passport.use(
    new googleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback', //to any route you define
            proxy: true // this will fix the http vs https
        },
        async function(accessToken, refreshToken, profile, done){
            // find the input id in our database, if none found, then register
            let existingUser = await User.findOne({googleId : profile.id}); 
                try {
                    if(existingUser){
                        console.log(`User already registered and it is: ${existingUser}`);
                        done(null, existingUser);
                    }else{
                        console.log(`New user!! we will register you!!`);
                        let user = await new User({googleId: profile.id}).save()
                        done(null, user);
                    }
                }
                catch(err) {
                    console.log(err);
                }
            // console.log(`accessToek: ${accessToken}`);
            // console.log(`refresh token: ${refreshToken}`);
            // console.log(`Google Profile: ${profile}`);
        }
    )
);

