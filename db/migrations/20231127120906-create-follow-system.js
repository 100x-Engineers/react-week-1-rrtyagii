'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FollowSystems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.BIGINT
      },
      follower_id: {
        type: Sequelize.BIGINT,
        allowNull: false, 
        primaryKey: true, 
        references: {
          model: "Users", 
          key: 'id', 
        }
      },
      followee_id: {
        type: Sequelize.BIGINT,
        allowNull: false, 
        primaryKey: true, 
        references: {
          model: "Users", 
          key: 'id', 
        }
      },
      followed_at: {
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

    await queryInterface.addConstraint('FollowSystems', {
      fields: ['follower_id', 'followee_id'],
      type: 'check',
      name: 'check_follower_is_not_followee',
      where: {
        follower_id: {
          [Sequelize.Op.ne]: Sequelize.col('followee_id')
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FollowSystems');
  }
};