import { Schema,model } from "mongoose";

const cartSchema = new Schema({
    userCart:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    cartProducts:{
        type:Array,
        required:true
    }
},{timestamps:true})

const Cart = model("Cart",cartSchema)
export default Cart