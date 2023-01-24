const dotenv = require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || "3005";
const { sequelize } = require("./models");
const router = require("./routes");

app.use(router);
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error.message);
});

app.listen(port, async () => {
  console.log("connecting..");
  await sequelize.sync({ force: true });
  console.log(`Starting Server with Port Number is ${port}`);
});
