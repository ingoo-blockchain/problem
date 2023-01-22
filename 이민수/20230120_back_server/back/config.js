require("dotenv").config();
const env = process.env;

const config = {
  port: env.PORT,
  db: {
    development: {
      username: env.DB_USER || "foo",
      password: env.DB_PASSWORD || "1q2w3e4r!",
      port: env.DB_PORT || "1234",
      database: env.DB_DATABASE || "",
      dialect: env.DB_DIALECT,
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
    test: {
      username: "foo",
      password: "boo",
      port: "1234",
      database: "isReal",
      dialect: env.DB_DIALECT || "",
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
  },
};

module.exports = config;
