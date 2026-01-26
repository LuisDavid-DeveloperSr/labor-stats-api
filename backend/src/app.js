import express from "express";
import cors from "cors";
import laborRoutes from "./routes/labor.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.json({
    message: "Labor Stats API funcionando correctamente"
  });
});

// Rutas de la API
app.use("/api", laborRoutes);

export default app;
