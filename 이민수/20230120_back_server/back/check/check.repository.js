class CheckRepository {
  constructor({ Users }) {
    this.Users = Users;
  }

  async duplicateCheck(data) {
    try {
      const result = await this.Users.findOne({ where: data, raw: true });
      console.log(result);
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findLoginUser({ userid, userpw }) {
    try {
      const user = await this.Users.findOne({
        raw: true,
        attributes: { exclude: ["userpw"] },
        where: {
          userid,
          userpw,
        },
      });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = CheckRepository;
