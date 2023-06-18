const mongoose = require('mongoose');


const adminSchema = mongoose.Schema({
    Fullname: String,
    mobile: String,
    email: String,
    password: String
});

module.exports = mongoose.model('admin',adminSchema);