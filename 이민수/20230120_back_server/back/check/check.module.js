const {
  sequelize: {
    models: { Users },
  },
} = require("../models");
const { salt } = require("../config");
const JWT = require("../lib/jwt");
const crypto = require("crypto");
const jwt = new JWT({ crypto, salt });

const CheckRepository = require("./check.repository");
const CheckService = require("./check.service");
const CheckController = require("./check.controller");

const checkRepository = new CheckRepository({ Users });
const checkService = new CheckService({ checkRepository, jwt, salt });
const checkController = new CheckController({ checkService });

module.exports = { checkController };
