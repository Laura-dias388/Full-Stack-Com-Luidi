/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      { name: 'Luidi Pires' },
      { name: 'Laura Dias' },
      { name: 'Ewerton Ferreira' },
      { name: 'Crysthian Strummiello' },
      { name: 'Juliana Martinelli' },
      { name: 'João Possamai' },
      { name: 'Neo' },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
