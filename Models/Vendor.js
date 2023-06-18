const mongoose = require('mongoose');


const VendorSchema = mongoose.Schema({
    Shopname: String,
    Vendorname: String,
    EmailID: String,
    Mobileno: Number,
    Pass: String,
    Ad:String
});

module.exports = mongoose.model('Vendor',VendorSchema);