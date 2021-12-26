import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

try {
  const connection = await mongoose.connect(process.env.MONGO_URL);

  console.log(" great success");
} catch (error) {
  console.log(error);
}

app.listen(process.env.PORT || 8080, () => {
  console.log("backend server running!");
});
