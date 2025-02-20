import { Schema,model } from "mongoose";

const orderSchema = new Schema({
    orderBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    products:{
        type:Array,
        required:true
    }
},{})

const Order = mongoose.model("Order",orderSchema)
export default Order