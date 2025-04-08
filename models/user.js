import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
});

export const User = mongoose.model("User", userSchema);
