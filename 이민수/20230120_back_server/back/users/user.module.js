const {
  sequelize: {
    models: { Users },
  },
} = require("../models");
const { salt } = require("../config");
const JWT = require("../lib/jwt");
const crypto = require("crypto");
const jwt = new JWT({ crypto, salt });

const UserRepository = require("./user.repository");
const UserService = require("./user.service");
const UserController = require("./user.controller");

const userRepository = new UserRepository({ Users });
const userService = new UserService({ userRepository, jwt, salt });
const userController = new UserController({ userService });

module.exports = {
  userController,
};
