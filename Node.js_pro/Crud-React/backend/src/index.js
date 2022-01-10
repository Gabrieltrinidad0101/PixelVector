const server = require('./app');

require("./database")

server.listen(4000,()=>{
    console.log("start the server");
});


