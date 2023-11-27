'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    email_verified_at: DataTypes.TIME,
    display_name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    DOB: DataTypes.DATE,
    passwordHash: DataTypes.STRING,
    following: DataTypes.INTEGER,
    follower: DataTypes.INTEGER,
    biolink: DataTypes.STRING,
    profile_picture_url: DataTypes.STRING,
    cover_picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};