
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/users'); //all variable in models/users are now available
require('./services/googleAuthService');  // since we are not exporting anything from service, nothing is assigned

mongoose.connect(keys.mongoUri);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //session time is set to 30 days in miniseconds
    keys: [keys.cookieKey] //cookieKey is a randomized serialized string that we pass in and we will use it to maintain session with client and server
}))

app.use(passport.initialize());
app.use(passport.session());

// const router = express.Router();

app.set('port', (process.env.PORT || 5002));

app.listen(app.get('port'),()=>{
    console.log(`Node app is listening to port ${app.get('port')}`);
});

app.get('/',(req,res)=>{
    res.send(
        '<h3>Home Page</h3> <a href="/auth/google">Login with Google</a>'
    );
});

require('./routes/googleAuthRoutes')(app); //route to auth/google


// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT WTF Mike?' });
});
