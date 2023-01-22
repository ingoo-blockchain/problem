const express = require("express");
const router = express.Router();
const users = require("../users/user.route");
const check = require("../check/check.route");

router.use("/users", users);
router.use("/check", check);

module.exports = router;
