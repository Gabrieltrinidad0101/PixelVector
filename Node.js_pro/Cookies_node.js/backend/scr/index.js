const express = require("express")
const morgan = require("morgan")
const cookiesParser = require("cookie-parser");
const cors = require("cors");
const app = express();

//database
require("./database")

//middelwares
app.use(morgan("dev"))
app.use(express.urlencoded({extends: false}))
app.use(express.json())
app.use(cookiesParser())
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
//start the server
app.listen(4000,()=>{
    console.log('start the serve in the port 3000');
});

app.get("/test",(req,res)=>{
    res.send("hello world")
});

//router
app.use("/auth",require("./Router/router"))
app.use("/customer",require("./Router/routerCustomer"))