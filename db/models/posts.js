'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init({
    user_id: DataTypes.BIGINT,
    content: DataTypes.STRING,
    posted_at: DataTypes.DATE,
    repost_id: DataTypes.BIGINT,
    reply_to_post_id: DataTypes.BIGINT,
    likes_count: DataTypes.INTEGER,
    replies: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    repost_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};