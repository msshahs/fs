const express = require('express');
const { PromiseProvider } = require('mongoose');
const app = express();
const port = process.env.PORT || 2000
require('./db/connection');
const Register = require('./models/register')
const path = require('path')

//setting view engine and static path (relative)

const newpath = path.join(__dirname,'../public');

app.use(express.static(newpath));
app.set("view engine","hbs");

// to properly get text from request as readable format

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/signup',(req,res)=>{
    res.render('signup');
})
app.get('/promo',(req,res)=>{
    res.render('promo');
})
app.get('/map',(req,res)=>{
    res.render('map');
})
app.get('/dub',(req,res)=>{
    res.render('dubai');
})
app.get('/green',(req,res)=>{
    res.render('greenland');
})
app.get('/mal',(req,res)=>{
    res.render('maldives');
})


app.post('/signup',async(req,res)=>{
    // console.log(req.body);
    try {
        if(req.body.password === req.body.cpassword ){
            
            const newUserData = new Register({
                name:req.body.username,
                email:req.body.email,
                number:req.body.number,
                password:req.body.password,
                confirmpassword:req.body.cpassword
            })

           const registered  = await newUserData.save()
         return res.status(201).render('index')
         
        }
        else{
            return res.status(400).json({
                success:false
            })
            console.log('password not matching');
            
        }
    } catch (error) {
        console.log(error);
        
         res.render('signup')
    }
 
})

app.post('/login',async(req,res)=>{

    try {
        const username = req.body.userid;
        const passw = req.body.passwordid;
        const newobj = await Register.findOne({name:username});

        if (newobj.password=== passw) {
            res.status(201).render('index');

        } else {
            res.send('passwords are not matching pls check')
        }

    } catch (error) {
        console.log('errror');
        res.status(400).send("Invalid Email Pls Sign Up First and Retry")
    }
    
})


app.listen( port ,()=>{
    console.log(`listening on port ${port}`);
} )