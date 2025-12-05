import express from "express";
import cors from "cors";
import clientRoutes from "../src/routes/clientRoutes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("<h1>Hello</h1>");
});

app.use("/api", clientRoutes);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port} `);
});
