const express = require('express');
const router = express.Router();
const {userController: controller} = require("./user.module")

router.get("/Profile", (req,res,next) => controller.Inform(req,res,next))
router.post("/", (req,res,next)=> controller.postSignUp(req,res,next));

module.exports = router;