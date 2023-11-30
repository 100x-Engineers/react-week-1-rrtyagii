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
        allowNull: false, 
        references:{
          model: 'Users', 
          key: 'id'
        }
      },
      content: {
        type: Sequelize.STRING(280),
        allowNull: false, 
      },
      posted_at: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
      repost_id: {
        type: Sequelize.BIGINT,
        allowNull: true, 
        references:{
          model: 'Posts', 
          key: 'id',
        }
      },
      reply_to_post_id: {
        type: Sequelize.BIGINT,
        allowNull: true, 
        references:{
          model: 'Posts', 
          key: 'id',
        }
      },
      likes_count: {
        type: Sequelize.INTEGER,
        allowNull: true, 
      },
      replies: {
        type: Sequelize.INTEGER,
        allowNull: true, 
      },
      views: {
        type: Sequelize.INTEGER,
        allowNull: true, 
      },
      repost_count: {
        type: Sequelize.INTEGER,
        allowNull: true, 
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