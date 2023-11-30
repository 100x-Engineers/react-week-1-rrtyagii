'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      username: {
        type: Sequelize.STRING(60),
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(200),
        unique: true,
        allowNull: false
      },
      email_verified_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      display_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      passwordHash: {
        type: Sequelize.STRING(600),
        allowNull: false,
      },
      following: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      follower: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bio: {
        allowNull:true,
        type: Sequelize.STRING(160),
      },
      location: {
        allowNull:true,
        type: Sequelize.STRING(120),
      },
      bio_link: {
        allowNull: true,
        type: Sequelize.STRING(150),
      },
      profile_picture_url: {
        allowNull: true,
        type: Sequelize.STRING(1024),
      },
      cover_picture_url: {
        allowNull: true,
        type: Sequelize.STRING(1024),
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
    await queryInterface.dropTable('Users');
  }
};