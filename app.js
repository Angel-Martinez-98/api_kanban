import express from "express";
import { properties } from "./properties.js";
import { PublicRouter } from "./routes/Categories/Public.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "OK" });
});
app.use("/categories", PublicRouter);

const { HOST, PORT } = properties;
app.listen(PORT, () => {
  console.log(`${HOST}:${PORT}`);
});
