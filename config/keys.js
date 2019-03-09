// Key.js  - figure out what set of credential to use
// check the process.env object which we will define in prod env
if(process.env.NODE_ENV === 'production'){
    // we are in production return the prod set
    module.exports = require('./prod');
}else{
    // we are in dev so return the dev set
    module.exports = require('./dev');
}
