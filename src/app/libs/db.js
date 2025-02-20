import mongoose from "mongoose";
const MONGODB_URL = process.env.MONOGODB_URL;

if(!MONGODB_URL){
    throw new Error("Please define mongodb uri in env file")
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose =  {conn:null,promise:null};
}

export async function connectDataBase() {
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const opts = {
            bufferCommands:true,
            maxPoolSize : 10,
        }
        cached.promise = mongoose.connect(MONGODB_URL,opts)
        .then(()=>mongoose.connection)
        .catch((err)=>{console.log(err);})
    }
    try {
        cached.conn = await cached.promise
        
    } catch (error) {
        cached.promise = null
        throw new Error("Check DataBase File")
    }

    return cached.conn
}