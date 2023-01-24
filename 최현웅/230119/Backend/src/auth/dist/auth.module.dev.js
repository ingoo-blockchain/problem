"use strict";

var _require = require("../../models"),
    User = _require.sequelize.models.User;

var AuthRepository = require("./auth.repository");

var AuthService = require("./auth.service");

var AuthController = require("./auth.controller");

var JWT = require("../../lib/jwt");

var crypto = require("crypto");

var jwt = new JWT({
  crypto: crypto
});
var authRepository = new AuthRepository({
  User: User
});
var authService = new AuthService({
  authRepository: authRepository,
  jwt: jwt
});
var authController = new AuthController({
  authService: authService
});
module.exports = {
  authController: authController
};