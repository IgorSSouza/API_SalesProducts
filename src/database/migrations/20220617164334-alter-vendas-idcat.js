module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('vendas', 'id_Categoria', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('vendas', 'idCategoria');
  },
};
