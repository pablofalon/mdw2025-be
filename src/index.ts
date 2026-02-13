import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './db';
import publicRoutes from "./routes/public.routes";
import Course from "./models/Course";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Prueba de endpoints

app.get("/", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});


app.get("/seed", async (_req, res) => {
  const course = await Course.create({
    title: "Primer documento",
    description: "Se crea la base automáticamente",
  });

  res.json(course);
});


app.use("/api/public", publicRoutes);
