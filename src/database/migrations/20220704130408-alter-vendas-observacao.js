module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('vendas', 'observacao', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('vendas', 'observacao');
  },
};
