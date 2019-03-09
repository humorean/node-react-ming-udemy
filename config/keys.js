// Key.js  - figure out what set of credential to use
// check the process.env object
if(process.env.NODE_ENV === 'production'){
    // we are in production return the prod set
    module.export = require('./prod');
}else{
    // we are in dev so return the dev set
    module.export = require('./dev');
}



// Production GOOGLE API KEY: 146245926382-da67b7otsosio7ellqk5n7fg4scpm7sv.apps.googleusercontent.com
// Production GOOGLE secret: ymZrEllUK6jK-tHNzvljPh9V