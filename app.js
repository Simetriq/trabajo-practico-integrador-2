import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/database.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
