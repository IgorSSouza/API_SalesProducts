module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('vendas', 'id_Servico', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'servicos',
        key: 'id',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('vendas', 'id_Servico');
  },
};
