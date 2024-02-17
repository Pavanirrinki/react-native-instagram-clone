const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const userRoute = require("./ROUTES/UserRoute.jsx");
const PostRoute = require("./ROUTES/PostRoute.jsx")
require('dotenv').config()
const port = process.env.PORT || 8000


app.use(express.json());
app.use(cors({
  origin:"*"
}))

app.use("/",userRoute);
app.use("/",PostRoute)
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB CONNECTED");
  });
  
app.get("/pavan_kumar",async(req,res)=>{
  console.log("pavan kumat")
 res.status(200).json("pavan kumar")


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
