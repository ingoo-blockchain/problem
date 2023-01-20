// const request = require("../../public/js/lib/request");
const service = require("./user.service");

exports.signup = async (req, res) => {
  //   console.log({ ...req.body });
  const userInfo = req.body;
  const response = await service.signup(userInfo);
  res.redirect("/user/welcome");
};
