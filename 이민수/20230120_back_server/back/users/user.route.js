const express = require("express");
const router = express.Router();
const { userController: controller } = require("./user.module");

router.get("/", (req, res, next) => controller.getUser(req, res, next));

router.post("/", (req, res, next) => controller.postSignup(req, res, next));

router.put("/", (req, res, next) => controller.putUser(req, res, next));

module.exports = router;
