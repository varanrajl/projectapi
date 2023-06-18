const signup = require('../Models/signup');
const signModel = require('../Models/signup');

module.exports = {

create: (req, res) => {
    let signup = new signModel({
        Fullname  : req.body.Fullname,
        mobile : req.body.mobile,
        email : req.body.email,
        password : req.body.password

        
     })
     
     signup.save()
     .then(result => {
         res.json({ success: true, result: result})
     })
     .catch(err => {
          res.json({ success: false, result: err})
         })
},

update: (req, res) => {
    signModel.findByIdAndUpdate({_id: req.body._id}, req.body)
    .then(signup => {
        res.send(signup)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
},

get: (req, res) => {
    signModel.find()
    .then(signup => {
        res.send(signup);
    })
    .catch(err => {
        res.json({ success: false, result: "No Register found"})
    })
},

delete: (req, res) => {
    signModel.findByIdAndRemove({ _id: req.body._id})
    .then(signup => {
        if(!signup) {
            return res.status(404).send({
                message: "Register not found " + req.params._id
            });
        }
        res.send({message: "Register Added successfully!"});
    })
    .catch(err => res.json({success: false, result: err}))
}
}
