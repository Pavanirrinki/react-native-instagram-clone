const express = require("express");
const router = express.Router();
const userModel = require("../MODELS/UserModel.jsx")
const jwt = require('jsonwebtoken')

//---------------------SIGN UP------------------------------
router.post("/signup",async(req,res)=>{
 const {email,username,password,mobilenumber} = req.body;
   try{
const usersignupemail = await userModel.find({email});
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
    console.log("e")
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
  console.log("1234577777")
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

//------------------FOLLOWING ROUTE-------------------------------
router.post("/update_following",async(req,res)=>{
  const {user_id,following_user_id} = req.body;

  try{
  const update_user_following_list = await userModel.findById(user_id);
  const update_user_followers_list = await userModel.findById(following_user_id)
  
  if(update_user_following_list?.following.toString().includes(following_user_id)){
    
   return res.status(401).send("you already followed the user")
  }else{
  
     await update_user_following_list?.following?.push(following_user_id);
     await update_user_followers_list?.followers?.push(user_id);
    
    await update_user_following_list.save();
    await update_user_followers_list.save();
    return res.status(201).send("followed sucessfully")
  }
}catch(error){
  return res.status(500).json({error:error.message})
}
})
 
//-------------------------USER DETAILS ROUTE--------------------------
router.get("/user_details/:id",async(req,res)=>{
  try{
const userdetails = await userModel.findById(req.params.id).populate("stories followers following");

return res.status(200).json({userdetails})
  }catch(error){
    return res.status(500).json({error:error.message})
  }
})

module.exports = router;