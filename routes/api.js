const express=require("express");
const router=express.Router();
const {loadapi,allproducts}=require("../controllers/api")
router.get("/load",loadapi);
router.get("/allproducts",allproducts);
module.exports=router;