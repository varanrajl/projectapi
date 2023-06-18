const mongoose = require('mongoose');


const signupSchema = mongoose.Schema({
    Fullname: String,
    mobile: String,
    email: String,
    password: String
});

module.exports = mongoose.model('signup',signupSchema);