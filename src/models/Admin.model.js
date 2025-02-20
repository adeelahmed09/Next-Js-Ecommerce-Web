import {Schema,model} from "mongoose"
const adminSchema = new Schema({
    adminName :{
        type:String,
        requried:true,
        unique:true
    },
    role:{
        type:String,
        required:true,
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
},{
    timestamps:true
})

const Admin = model("Admin",adminSchema)
export default Admin