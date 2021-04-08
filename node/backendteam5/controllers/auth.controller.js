const env = require("dotenv");
env.config();
const config = process.env.SECRET;
const db = require("../models");
const User = db.user;
const Role = db.role;
let jwt = require("jsonwebtoken")
let bcrypt = require('bcryptjs')

exports.signup = (req, res)=>{
    const user = new User({
        username: req.body.username,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })

    user.save((err, user)=>{
        
    })
}