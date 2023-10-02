import mongoose from "mongoose";

const databaseConnection = async (req, res) => {
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/merndb');
} catch (error) {
    console.log(error);
}
}

