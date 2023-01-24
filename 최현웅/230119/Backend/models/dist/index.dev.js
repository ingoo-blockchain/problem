"use strict";

var fs = require("fs");

var path = require("path");

var Sequelize = require("sequelize");

var env = process.env.NODE_ENV || "development";

var config = require("../config")["db"][env];

var sequelize = new Sequelize(config.database, config.username, config.password, config);
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf("model") !== -1;
}).map(function (file) {
  try {
    require(path.join(__dirname, file))(sequelize, Sequelize);
  } catch (e) {
    console.log("Error requiring file: ".concat(file, ". Error: ").concat(e));
  }
});
var models = sequelize.models;

for (var key in models) {
  if (typeof models[key].associate !== "function") continue;
  models[key].associate(models);
}

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize
}; // const t1 = fs.readdirSync(__dirname);
// console.log("t1",t1);
// const t2 = fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1);
// console.log("t2", t2)
// const t31 = fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1).forEach(file =>{
//     require(path.join(__dirname, file))
// })
// console.log("t3", t31)
// fs.readdirSync(__dirname).filter((file) => file.indexOf("model") !== -1).forEach((file) => {
//         require(path.join(__dirname, file))(sequelize, Sequelize)
//     })
// fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1).map(file => {
//     try {
//         require(path.join(__dirname, file))
//     } catch(e) {
//         console.log(`Error requiring file: ${file}. Error: ${e}`)
//     }
// })(sequelize, Sequelize)
// console.log("t3-2", t32);
// fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1).forEach(file =>{
//         require(path.join(__dirname, file))
//     })(sequelize, Sequelize);