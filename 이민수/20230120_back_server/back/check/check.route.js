const express = require("express");
const router = express.Router();
const { checkController: controller } = require("./check.module");

router.get("/", (req, res, next) => controller.duplicateCheck(req, res, next));

router.post("/auth", (req, res, next) => controller.postLogin(req, res, next));

module.exports = router;
