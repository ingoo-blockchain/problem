"use strict";

var express = require('express');

var router = express.Router();

var _require = require("./auth.module"),
    controller = _require.authController;

router.post("/", function (req, res, next) {
  return controller.postSignIn(req, res, next);
});
module.exports = router;