"use strict";

var express = require('express');

var router = express.Router();

var users = require("../src/user/user.route");

var auth = require("../src/auth/auth.route");

router.use("/users", users);
router.use("/Profile", users);
router.use("/auth", auth);
module.exports = router;