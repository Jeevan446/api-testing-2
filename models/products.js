const mongoose=require("mongoose");
const mongoUrl=process.env.MONGO_URL;
mongoose.connect(mongoUrl).then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
const productSchema=mongoose.Schema({
    name:{
      type:String
    },
    price:{
      type:Number,
      require:[true,"price must be provided"]
    },
    rating:{
      type:Number,
      default:4.9
    },
    createaAt:{
      type:Date,
      default:Date.now
    },
    company:{
    type:String
    }
})
module.exports=mongoose.model("product",productSchema);