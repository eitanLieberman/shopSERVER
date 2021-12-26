import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { default as userRouter } from "./routes/user.js";
dotenv.config();
const app = express();
//check
try {
  const connection = await mongoose.connect(process.env.MONGO_URL);

  console.log(" great success");
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("backend server running!");
});
