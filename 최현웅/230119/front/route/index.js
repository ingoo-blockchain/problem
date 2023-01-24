const express = require("express");
const router = express.Router();
const user = require("../src/user/user.router");

router.get("/", (req, res) => {
  // console.log(req.user);
  res.render("index.html");
});

router.use("/user", user);

module.exports = router;
