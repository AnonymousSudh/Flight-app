'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      }
      , {
        name: "Juhu Aerodrome",
        cityId: 1,
        createdAt: new Date(),
        updatedAt:new Date()

      }, {
        name: "Begusarai Airport",
        cityId: 5,
        createdAt: new Date(),
        updatedAt:new Date()

      }, {
        name: "Lal Bahadur Shastri International Airport",
        cityId: 6,
        createdAt: new Date(),
        updatedAt:new Date()

      }, {
        name: "Jay Prakash Narayan Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt:new Date()

      }, {
        name: "Indira Gandhi International Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt:new Date()
      }
      , {
        name: "Pune Airport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: "Hadapsar Airport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: "New Pune Airport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: "Vellore Airport",
        cityId: 4,
        createdAt: new Date(),
        updatedAt:new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
