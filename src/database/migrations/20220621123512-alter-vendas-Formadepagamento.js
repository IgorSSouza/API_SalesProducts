module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('vendas', 'id_Pagamento', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'formapagamentos',
        key: 'id',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('vendas', 'id_Pagamento');
  },
};
