class UserRepository {
  constructor({ Users }) {
    this.Users = Users;
  }

  async getMyProfile(userid) {
    try {
      const profile = await this.Users.findOne({
        raw: true,
        attributes: { exclude: ["userpw"] },
        where: {
          userid,
        },
      });
      return profile;
    } catch (e) {
      throw new Error(e);
    }
  }

  async addUser(payload) {
    try {
      const result = await this.Users.create(payload);
      const { userpw, ...rest } = result.dataValues;
      return rest;
    } catch (e) {
      throw new Error(e);
    }
  }

  async change({ userid, data }) {
    try {
      const result = await this.Users.update({ ...data }, { where: { userid } });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UserRepository;
