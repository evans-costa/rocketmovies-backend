import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import AppError from "./utils/AppError.js";
import database from "./database/sqlite/index.js";
import { router } from "./routes/index.js";
import { UPLOADS_FOLDER } from "./configs/upload.js";

database();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/files", express.static(UPLOADS_FOLDER));

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
