const passport = require('passport');

//note that app is not defined here, we need to pass it in as a parameter in the exported function
module.exports = app => {
    app.get('/auth/google', 
        passport.authenticate('google', { //'google' is defined in the googleStrategy above hiding, so we don't really see it in code
            scope: ['profile'] //defines what fields we want from google profile
        })
    );
    app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

    app.get('/logout', (req, res)=>{
        req.logout(); //built-in function to log user out and make cookie expire
        res.send(req.user);
    })

    app.get('/current_user', (req,res)=>{
        res.send(req.user);
    })
}
//take app as parameter then we will pass in app from the index where it calls it.  
