import express from "express";
import { Request, Response } from "express";
import sequelize from "./config/db";
import cors from "cors";
import authRoutes from "./routes/auth";
import dataRoute from "./routes/data";
require("dotenv").config();

let { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");

  if (sequelize) {
    console.log(sequelize.getDatabaseName());
  }
});

app.use("/auth", authRoutes);
app.use("/api", dataRoute);

if (sequelize) {
  sequelize
    .sync()
    .then(() => {
      console.log("Database connected");
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((err) => console.log("Error: " + err));
}
