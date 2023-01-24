module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          user_IDX: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          userId: {
            type: Sequelize.STRING(60),
            unique: true,
          },
          userPw: {
            type: Sequelize.STRING(64),
            allowNull: true,
          },
          userName: {
            type: Sequelize.STRING(30),
            allowNull: true,
          },
          provider: {
            type: Sequelize.ENUM("local", "kakao"),
            allowNull: true,
            defaultValue: "local",
          },
          snsId: {
            type: Sequelize.STRING(30),
            allowNull: true,
          },
          userBirth: {
            type: Sequelize.STRING(30),
            allowNull: true,
          },
          userGender: {
            type: Sequelize.ENUM("남자", "여자"),
            allowNull: true,
            defaultValue: "남자",
          },
          userPhone: {
            type: Sequelize.STRING(128),
            allowNull: true,
          },
          userEmail: {
            type: Sequelize.STRING(128),
            allowNull: true,
          },
          userAddress: {
            type: Sequelize.STRING(256),
            allowNull: true,
          },
          userRegistrationDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW(),
          },
        },
        {
          sequelize,
        }
      );
    }
  }
  User.initialize();
};
