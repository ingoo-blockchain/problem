const express = require("express");
const nunjucks = require("nunjucks");
const cookie_parser = require("cookie-parser");
const router = require("./route");
const app = express();

app.set("view engine", "html");
nunjucks.configure("views", { express: app });
app.use(express.static("public"));
app.use(cookie_parser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

module.exports = app;
