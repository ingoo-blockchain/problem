module.exports = (sequelize, Sequelize) => {
  class Users extends Sequelize.Model {
    static initialize() {
      return this.init(config, settings);
    }
  }

  const config = {
    userid: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
    userpw: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    nickname: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true,
    },
    birth: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    phonenum: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    register: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    provider: {
      type: Sequelize.ENUM("local", "kakao"),
      allowNull: false,
      defaultValue: "local",
    },
    snsid: {
      type: Sequelize.STRING(64),
      allowNull: true,
    },
  };

  const settings = {
    sequelize,
  };

  Users.initialize();
};
