'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT,
        references:{
          model: 'Users', 
          key: 'id'
        }
      },
      content: {
        type: Sequelize.TEXT(280),
      },
      posted_at: {
        type: Sequelize.DATE
      },
      repost_id: {
        type: Sequelize.BIGINT
      },
      reply_to_post_id: {
        type: Sequelize.BIGINT
      },
      likes_count: {
        type: Sequelize.INTEGER
      },
      replies: {
        type: Sequelize.INTEGER
      },
      views: {
        type: Sequelize.INTEGER
      },
      repost_count: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};