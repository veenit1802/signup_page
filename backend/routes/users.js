const router = require('express').Router();
const nodeMailer= require('nodemailer');
const xoauth2 = require('xoauth2');
let User = require('../models/user.model');


router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));
});



router.route('/add').post((req,res)=>{
    const firstname=req.body.firstname;
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    console.log(firstname+" "+username+" "+email+" "+password);
    const newUser = new User({firstname,username,email,password});
    
    newUser.save()
    .then(()=>{
        const send=require('gmail-send')({
            user:'',
            pass:'',
            to:`${email}`,
            subject:'test subject'
        });
        
        send({text:'gmail-send example1'},(error,result,fullresult)=>{
            if(error)
               {  
                console.error(error);
               }
            else
                console.log(result);
        });

        res.jsonp('User added');
    })
    .catch(
        
        err=>res.status(400).json('Error: '+err)
        );

    
});


module.exports = router;