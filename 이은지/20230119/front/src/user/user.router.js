const express = require("express");
const router = express.Router();
const controller = require("./user.controller");

router.get("/login", (req, res) => {
  res.render("user/login.html");
});

router.get("/signup", (req, res) => {
  res.render("user/signup.html");
});

router.post("/signup", controller.signup);

router.get("/welcome", (req, res) => {
  res.render("user/welcome.html");
});

module.exports = router;
