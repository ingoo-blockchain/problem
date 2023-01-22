require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models");
// const test = require("./check/check.module");

app.listen(process.env.PORT, async () => {
  await sequelize.sync({ force: true });
  console.log(`Server Start`);
  // await test.addUser({ userid: "test", userpw: "1234", username: "hello", nickname: "bb", birth: "1234-12-12", phonenum: "010-1234-1234" });
  // await test.signup({ userid: "test", userpw: "1234", username: "hello", nickname: "bb", birth: "1234-12-12", phonenum: "010-1234-1234" });
  // await test.findLoginUser({ userid: "cloudcoke", userpw: "92fa30bfd0cf10af657499883e9a3da10023d2bebb8788d71bfef74022177ae8" });
  // await test.login({ userid: "cloudcoke", userpw: "1234" });
});
