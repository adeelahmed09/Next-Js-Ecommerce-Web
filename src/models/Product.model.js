import { model, Schema } from "mongoose";


const productSchema = new Schema({
    productName:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:String,
        required:true,
    },
    publish:{
        type:Boolean,
        required:true,
    },
    image:{
        type:Array,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Category"
    },
    reviews:{
        type:Array,
    }
},{
    timestamps:true
})

const Product = model("Product",productSchema)
export default Product