import mongoose from 'mongoose'


let isConnected = false;

export async function connectToDatabase() {

    if (isConnected) {
        await mongoose.connect(process.env.DB_URL);
        mongoose.on("error", (err) => {
            console.log("Error Accured \n", error);
        })
    
        mongoose.on("connected", () => {
            console.log("Connected to Mongo DB")
            isConnected = true;
        })
    
        mongoose.on("disconnected", (err) => {
            console.log("Disconnected from Mongo DB");
            isConnected = false;
        })
    }

}