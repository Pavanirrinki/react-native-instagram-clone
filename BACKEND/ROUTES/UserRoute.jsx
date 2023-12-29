const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userModel = require("../MODELS/UserModel.jsx")
const jwt = require('jsonwebtoken')

//---------------------SIGN UP------------------------------
router.post("/signup",async(req,res)=>{
 const {email,username,password,mobilenumber} = req.body;
   try{
const usersignupemail = await userModel.find({email});
console.log(usersignupemail.length,'pavan kumar')
if(usersignupemail.length !== 0){
    res.status(201).json("email already exists")
}
else{
    const usersignup = new userModel({
        email,username,password,mobilenumber
    })
    usersignup.save()
    res.status(200).json({usersignup})
}

   }catch(error){
    res.status(400).json({error:error.message})
   }
})
// ----------------LOGIN---------------------------------
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        if (existingUser.password == password) {
          let payload = {
            user: {
              id: existingUser.id,
            },
          };
  
          jwt.sign(payload, "jwtpassword", (error, token) => {
            if (error) throw error;
            const userWithoutPassword = { ...existingUser._doc }; // mongodb data to plain javascript object can be converted 
            delete userWithoutPassword.password;
  
            return res.json({ token, user: userWithoutPassword });
           
           
          });
        } else {
          return res.status(400).send("password wrong");
        }
      } else {
        return res.status(400).send("email wrong");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });



module.exports = router;