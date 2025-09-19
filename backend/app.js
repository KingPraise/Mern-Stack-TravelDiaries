import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

// connections
// allow a configurable MongoDB URI via env, otherwise use local MongoDB
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/traveldairies';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`MongoDB connected — server listening on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.error('MongoDB connection error:', err));
