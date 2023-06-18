const adminModel = require('../Models/admin');

module.exports = {

create: (req, res) => {
    let admin = new adminModel({
        Fullname  : req.body.Fullname,
        mobile: req.body.mobile,
        email : req.body.email,
        password: req.body.password
        
     })
     
     admin.save()
     .then(result => {
         res.json({ success: true, result: result})
     })
     .catch(err => {
          res.json({ success: false, result: err})
         })
},

update: (req, res) => {
    adminModel.findByIdAndUpdate({_id: req.body._id}, req.body)
    .then(admin => {
        res.send(admin)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
},

get: (req, res) => {
    adminModel.find()
    .then(admin => {
        res.send(admin);
    })
    .catch(err => {
        res.json({ success: false, result: "No Register found"})
    })
},

delete: (req, res) => {
    adminModel.findByIdAndRemove({ _id: req.body._id})
    .then(admin => {
        if(!admin) {
            return res.status(404).send({
                message: "Register not found " + req.params._id
            });
        }
        res.send({message: "Register Added successfully!"});
    })
    .catch(err => res.json({success: false, result: err}))
}
}
