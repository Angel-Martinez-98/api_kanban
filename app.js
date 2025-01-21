import express from "express";
import { properties } from "./properties.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

const { HOST, PORT } = properties;
app.listen(PORT, () => {
  console.log(`${HOST}:${PORT}`);
});
