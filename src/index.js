import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createDB } from "./db/createDB.js";

import { router } from "./routes/index.js";

dotenv.config();

createDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () =>
  console.log(`Server started on port ${port}`, new Date())
);
