const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

module.exports = app;
