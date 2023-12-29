const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const userRoute = require("./ROUTES/UserRoute.jsx")
require('dotenv').config()
const port = process.env.PORT || 8000


app.use(express.json());
app.use(cors({
  origin:"*"
}))
  app.use("/",userRoute)
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB CONNECTED");
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
