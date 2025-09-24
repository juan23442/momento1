import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRouter from "./routes/health.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API base" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});