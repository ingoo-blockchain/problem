"use strict";

var express = require('express');

var router = express.Router();

var _require = require("./user.module"),
    controller = _require.userController;

router.get("/Profile", function (req, res, next) {
  return controller.Inform(req, res, next);
});
router.post("/", function (req, res, next) {
  return controller.postSignUp(req, res, next);
});
module.exports = router;