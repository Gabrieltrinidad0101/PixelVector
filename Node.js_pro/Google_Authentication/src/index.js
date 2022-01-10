//modules
const express = require("express")
const path = require("path")

//app
const app = express();

//PORT
const PORT = process.env.PORT || 3000

//Setting
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Router
app.get("/",(req,res)=>{
    res.render("index")
})

//Start the server
async function server(){
    await app.listen(PORT)
    console.log(`Start the server in the port ${PORT}`);
}

server()