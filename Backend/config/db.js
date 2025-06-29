import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anuj:2006@cluster0.2mfrcqx.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
}