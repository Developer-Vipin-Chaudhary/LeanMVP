import express from "express";
import { Request, Response } from "express";
import sequelize from "./config/db";
import authRoutes from "./routes/auth";

require("dotenv").config();

let { PORT } = process.env;

const app = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");

  if (sequelize) {
    console.log(sequelize.getDatabaseName());
  }
});

app.use("/auth", authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

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
