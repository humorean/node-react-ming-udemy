const mongoose = require('mongoose');
const { Schema } = mongoose; // destructuring taking mongoose.Schema

//User schema to define the required field and its type
const userSchema = new Schema({
    googleId : String
});

//Thie model will only be created if 'users' does not exist yet; Our first Model Class
mongoose.model('users', userSchema); //model take two params, (name of model, schema)