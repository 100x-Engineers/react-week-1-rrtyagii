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
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING(200),
      },
      email_verified_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      display_name: {
        type: Sequelize.STRING(100),
      },
      DOB: {
        type: Sequelize.DATE
      },
      passwordHash: {
        type: Sequelize.STRING
      },
      following: {
        type: Sequelize.INTEGER
      },
      follower: {
        type: Sequelize.INTEGER
      },
      bio: {
        allowNull:true,
        type: Sequelize.TEXT(160),
      },
      location: {
        allowNull:true,
        type: Sequelize.STRING(120),
      },
      bio_link: {
        allowNull: true,
        type: Sequelize.STRING
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