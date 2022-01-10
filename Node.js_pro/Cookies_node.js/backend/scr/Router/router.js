const bcrypt = require("bcryptjs")
const router = require("express").Router()
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const key = "q1q1hhvgfgdfgsdasgydgsaydtyastdyas7das678d6a78sd678as6d78a6s7d6as786d78as68"

//Register

router.post("/",async(req,res)=>{
    try {
        const {email,password,passwordVerify} = req.body
        if(!email || !password || !passwordVerify){
            return res.status(400).json({errorMessage: "please enter all required fields"})
        }
        if(password.length < 6){
            return res.status(400).json({errorMessage: "Please enter password of at least 6 characters"})
        }
        if(password !== passwordVerify){
            return res.status(400).json({errorMessage: "Please enter the same password twice"})
        }
        const existingUser = await User.findOne({email})

        if(existingUser) return res.status(400).json({errorMessage: "An account with this email already exists"})
        
        // hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password,salt);
        const newUser = new User({
            email,
            passwordHash
        })
        await newUser.save()
       const token = jwt.sign({ 
           user: newUser._id
       },key)
        res
        .cookie("token",token,{
            httpOnly: true
        })
        .send()
    } catch (error){
        res.status(500).send("error")
    }
});

//Log in

router.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body
        if(!email || !password)
            return res
                    .status(400)
                    .json({errorMessage: "Please enter all required .fields"})

        const existingUser = await User.findOne({email});

        const passwordCorrect = await bcrypt.compare(password,existingUser.passwordHash)

        if(!existingUser || !passwordCorrect) return res.status(401).json({errorMessage: "Wrong email or password"});

        const token = jwt.sign({ 
           user: existingUser._id
        },key)
         res
         .cookie("token",token,{
            httpOnly: true
         })
         .send();
    }catch(error){
        res.status(500).send("error");
    }
})

router.get("/logout",(req,res)=>{
    res.cookie("token","",{
        httpOnly: true,
        expires: new Date(0)
    })
    .send()
})

module.exports = router;