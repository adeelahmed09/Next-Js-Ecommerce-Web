import mongoose, {Schema,model, models} from "mongoose";


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    avatar:{
        type:String,
    },
    role:{
        type:String,
        required:true,
    },
    address:{
        type:String,
    },
    phone:{
        type:Number
    }
},{
    timestamps:true,
})

const User = models.User || model("User",userSchema)
export default User