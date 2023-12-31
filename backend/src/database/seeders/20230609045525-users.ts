import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
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

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {});
  },
};
