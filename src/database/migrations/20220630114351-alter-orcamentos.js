module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orcamentos', 'observacao', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('orcamentos', 'observacao');
  },
};
