const express=require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const cors=require("cors");

// fetch routes
const routes1=require("./routes/MessgRoutes");

const app=express();
const PORT =process.env.PORT | 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo DB connected"))
.catch((err)=>console.log(err));

// use routes 
app.use("/api",routes1);

app.listen(PORT,()=>console.log(`Listening at port ${PORT}`))
