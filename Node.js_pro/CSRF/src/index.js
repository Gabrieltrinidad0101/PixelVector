const express = require("express");
const sessions =  require("express-session");
const handlebars = require("express-handlebars");
const path = require("path")
const app = express();
const fs = require("fs");

const users = JSON.parse(fs.readFileSync("db.json"))

const login = (req,res,next)=>{
    if(!req.session.userId){
        res.redirect("login")
    }else{
        next()
    }
}

app.use(express.urlencoded({extended: true}))
app.use(sessions({
    secret: 'test',
    resave: false,
    saveUninitialized: false
}));

app.set('views',__dirname);
app.engine("hbs",handlebars({
    defaultLayout: "main",
    layoutsDir: __dirname,
    extname: '.hbs'
}));
app.set("view engine","hbs")

app.get("/home",login,(req,res)=>{
    res.send("hello world")
});

app.get("/login",(req,res)=>{
    res.render('login')
})

app.post("/login",(req,res)=>{
    const user = users.find(users => users.email === req.body.email)
    if(!user){
        res.status(400);
    }
    req.session.userId = user.id
    console.log(req.session);
    res.redirect("/home")
})


app.get("/edit",(req,res)=>{
    res.render('edit')
});

app.post("/edit",(req,res)=>{
    const user = users.find(user => user.id === req.session.userId);
    user.email = req.body.email;
    console.log(user.email);
    res.redirect("/home")
});

app.listen(3000,()=>{
    console.log("start the server");
});