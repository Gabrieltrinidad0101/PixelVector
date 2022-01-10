import jwt from 'jsonwebtoken'
import User from '../models/User'
import Role from '../models/Role'

export const verify = async (req,res,next)=>{
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).json("error 1");

    const decojwt = jwt.verify(token,"product");
    req.userId = decojwt.id;
    const user = await User.findOne({_id: req.userId});
    if(!user) return res.status(401).json("error 2");
    next();
}


export const isModify = async (req,res,next)=>{
    const user = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}},{name: 1,_id: 0});
    for (const role of roles) {
        console.log(role.name)
        if(role.name === "moderator"){
            next();
            return;
        }
    }
    return res.status(401).json("error 3");
}