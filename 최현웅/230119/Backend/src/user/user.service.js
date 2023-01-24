const dotenv = require("dotenv").config({ path: "../../.env" });
const SALT = process.env.SALT || "test";

console.log(SALT);

class UserService {
  constructor({ userRepository, jwt }) {
    this.userRepository = userRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
  }

  async SignUp({ userId, userPw, userName, userBirth, userGender, userPhone, userEmail, userAddress }) {
    try {
      if (!userId || !userPw || !userName) throw "Invalid or empty, Please try again.";
      const hash = this.crypto.createHmac("sha256", SALT).update(userPw).digest("hex");
      const user = await this.userRepository.addUser({ userId, userPw: hash, userName, userBirth, userGender, userPhone, userEmail, userAddress });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }

  async me(token) {
    try {
      const payload = this.jwt.verify(token, SALT);
      const { userId } = this.jwt.verify(token, SALT);
      const user = await this.userRepository.getInfo(userId);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UserService;
