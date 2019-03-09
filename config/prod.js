// Production keys here 
// COMMIT THIS TO PRODUCTION
module.export = {
    googleClientID: process.env.GOOGLE_CLIENT_ID, // from google
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET, //from google
    mongoURI: process.env.MONGO_URI,  //from mlab
    cookieKey: process.env.COOKIE_KEY //you type/create a random string with number a letters
}
