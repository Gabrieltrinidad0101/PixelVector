const jwt = require('jsonwebtoken')

const key = "q1q1hhvgfgdfgsdasgydgsaydtyastdyas7das678d6a78sd678as6d78a6s7d6as786d78as68"

function auth(req,res,next){
    try{
        const token = req.cookies.token;
        if(!token) return res.status(401).json({errorMessage: "Unauthorized"});
        const verified = jwt.verify(token,key)
        req.user = verified.user
        next()
    } catch (error){
        console.log(error);
        res.status(401).json({errorMessage: "Unauthorized"});
    }
}

module.exports = auth