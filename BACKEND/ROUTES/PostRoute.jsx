const express = require("express");
const router = express.Router();
const Middleware = require("../MIDDLEWARE/Middleware.jsx");
const PostModel = require("../MODELS/PostModel.jsx");
const usermodel = require("../MODELS/UserModel.jsx")
const storiesmodel = require("../MODELS/Storiesmodel.jsx")
router.post("/upload_post",async(req,res)=>{
    const {post,description,user_id} = req.body;
    const userdata = await usermodel.findById(user_id)
    try{
const uploaded_data = new PostModel({
    post,description
})
await uploaded_data.save()
await userdata?.uploaded_posts?.push(uploaded_data)
await userdata.save()
res.status(200).send("Uploaded Successfully")
    }catch(error){
        res.status(400).json(error.message)
    }
})


//-----------------------------UPLOAD STORY----------------------------
router.post("/upload_story/:id",async(req,res)=>{
    const {stories} = req.body;
    try{
      
    const uploaded_user = await usermodel.findById(req.params.id)
    const storiesupload = await new storiesmodel({stories});
   await storiesupload.save()
    await uploaded_user?.stories?.push(storiesupload)
    await uploaded_user.save()
    return res.status(200).json({uploaded_user})
    }catch(error){
        return res.status(200).json({error:error.message})
    }
})

module.exports = router