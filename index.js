require("dotenv").config();
const express=require("express");
const app=express();
const PORT=process.env.PORT || 5000;

const apiRouter=require("./routes/api");
app.use("/api",apiRouter);
app.listen(PORT,()=>{
    console.log(`server is listening to ${PORT} port`);
})