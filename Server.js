const express = require('express');
const mongoose = require('mongoose');

const app = express();
//Database
mongoose.connect('mongodb://0.0.0.0:27017/Grooscart', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(function (req,res,next)
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next();
})


const signupController  = require('./Controller/signupController');
  
app.post('/api/signup/create', signupController.create)
app.post('/api/signup/update', signupController.update)
app.get('/api/signup/getsignup', signupController.get)
app.delete('/api/signup/delete', signupController.delete)




const adminController  = require('./Controller/adminController');
  
app.post('/api/admin/create', adminController.create)
app.post('/api/admin/update', adminController.update)
app.get('/api/admin/getadmin', adminController.get)
app.delete('/api/admin/delete', adminController.delete)



const VendorController  = require('./Controller/VendorController');
  
app.post('/api/Vendor/create', VendorController.create)
app.post('/api/Vendor/update', VendorController.update)
app.get('/api/Vendor/getVendor', VendorController.get)
app.delete('/api/Vendor/delete', VendorController.delete)

const ProductsController  = require('./Controller/ProductsController');
  
app.post('/api/Products/create', ProductsController.create)
app.post('/api/Products/update', ProductsController.update)
app.get('/api/Products/getProduts', ProductsController.get)
app.delete('/api/Products/delete', ProductsController.delete)



//Start Server
app.listen(3402, ()=> console.log("Server started on 3402"))

