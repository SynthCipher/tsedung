import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected: Synthcipher");
        });

        // Use the URI from .env and explicitly target the synthcipher database
        const dbURI = `${process.env.MONGODB_URI}/synthcipher`;

        await mongoose.connect(dbURI);
    } catch (error) {
        console.error("Database Connection Error:", error);
    }
};

export default connectDB;
