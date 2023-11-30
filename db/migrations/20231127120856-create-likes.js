'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false, 
        primaryKey: true, 
        references:{
          model: 'Users',
          key: 'id',
        }
      },
      post_id: {
        type: Sequelize.BIGINT,
        allowNull: false, 
        primaryKey: true, 
        references:{
          model: 'Posts',
          key: 'id',
        }
      },
      liked_at: {
        type: Sequelize.DATE,
        allowNull: false, 
        defaultValue: Sequelize.NOW, 
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
    await queryInterface.dropTable('Likes');
  }
};