module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('vendas', 'valor', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('clientes', 'telefone');
  },
};
