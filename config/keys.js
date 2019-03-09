// Key.js  - figure out what set of credential to use
// check the process.env object
if(process.env.NODE_ENV === 'production'){
    // we are in production return the prod set
    module.exports = require('./prod');
}else{
    // we are in dev so return the dev set
    // console.log('in dev');
    // console.log(JSON.stringify(require('./dev')))
    module.exports = require('./dev');
}



// Production GOOGLE API KEY: 146245926382-da67b7otsosio7ellqk5n7fg4scpm7sv.apps.googleusercontent.com
// Production GOOGLE secret: ymZrEllUK6jK-tHNzvljPh9V