import express from "express";
import { properties } from "./properties.js";
import { PublicRouter } from "./routes/Categories/Public.js";

import { ProjectsPublicRouter } from "./routes/Projects/Public.js";
import { ProjectsPrivateRouter } from "./routes/Projects/Private.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "OK" });
});

app.use("/categories", PublicRouter);
app.use("/projects", ProjectsPublicRouter);
app.use("/projects", ProjectsPrivateRouter);

const { HOST, PORT } = properties;
app.listen(PORT, () => {
  console.log(`${HOST}:${PORT}`);
});
