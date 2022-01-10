const router = require("express").Router()
const Customer = require('../models/customer')
const auth = require("../middewares/auth");
router.post("/",auth,async(req,res)=>{
    try{
        const {name} = req.body
        const newCustomer = new Customer({
            name
        });
        const savedCustomer = await newCustomer.save();
        res.send(savedCustomer)
    }catch(error){
        console.log(error);
        res.status(500).send("error")
    }
});

router.get("/",auth,async(req,res)=>{
    try{
        if(req.user){
            const customers = await Customer.find()
            res.json(customers)
            return
        }
        res.status(401).json('the user does not found')
    }catch(error){
        console.log(error);
        res.status(500).send("error")
    }
});

module.exports = router