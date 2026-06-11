import mongoose from "mongoose";

async function connectDB(){
    try {
        if(process.env.MONGODB_URL){
            const conn = await mongoose.connect(process.env.MONGODB_URL!);
            console.log(`MONGO DB CONNECTED: ${conn.connection.host}`);
        }
        else{
            throw new Error("Database could not connect.");
        }
    } catch (error) {
        console.error(error);
        process.exit(1); 
    }

}

export default connectDB;