import express from "express";
import cors from "cors";
import clientRoutes from "./routes/clientRoute.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  //   return res.json({ message: "Hello" });
  return res.send("<h1>Hello sohel</h1>");
});

app.use("/api", clientRoutes);

app.listen(port, (req, res) => {
  console.log(`server is running at http://localhost:${port} `);
});
