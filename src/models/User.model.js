//Importations
import mongoose from "mongoose";

//Define the Users schemas
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, //Elimina los espacios y captura el texto unicamente
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
