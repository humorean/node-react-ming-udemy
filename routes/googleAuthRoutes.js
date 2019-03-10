const passport = require('passport');

//note that app is not defined here, we need to pass it in as a parameter in the exported function
module.exports = app => {
    app.get('/auth/google', 
        passport.authenticate('google', { //'google' is defined in the googleStrategy above hiding, so we don't really see it in code
            scope: ['profile'] //defines what fields we want from google profile
        })
    );

    // the above code google will need a callback to handle what comes after auth
    app.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        (req, res) => {
            // Successful authentication, redirect home.
            res.redirect('/surveys');
    });

    app.get('/api/logout', (req, res)=>{
        req.logout(); //built-in function to log user out and make cookie expire
        // res.send(req.user); // after logout this will return undefined
        res.redirect('/');
    })

    app.get('/api/current_user', (req,res)=>{
        // passport will attach to the req object which contains user
        res.send(req.user);
    })
}
//take app as parameter then we will pass in app from the index where it calls it.  
