const productModel=require("../models/products");
const jsondata=require("../product.json");
async function loadapi(req,res){
    await productModel.create(jsondata);
    console.log("Data loaded");
    return res.status(200).json({message:"Code runs sucessfully"})
}

async function allproducts(req, res) {
    try {
      const {company,rating,sort}=req.query;
      const queryObject={};
      if(company){
        queryObject.company={$regex:company, $options:"i"};
      }
      if(rating){
        queryObject.rating=rating
      }
      let apiData=productModel.find(queryObject);
      if(sort){
        let sortfix=sort.replace("," ," ");
        apiData=apiData.sort(sortfix);
      }
      let all = await apiData;
      return res.status(200).json(all);
    } catch (error) {
      console.error("Error finding products:", error.message);
      return res.status(500).json({ message: "Error while finding products" });
    }
  }
  
module.exports={
    loadapi,
    allproducts
}