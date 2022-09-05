import morgan from "morgan";
const express = require("express");
const path = require("path");
const apiRouter = require("./api");

const PORT = 1234;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/frontend", express.static("dist/frontend"));
app.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, "../dist/frontend/index.html"));
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
