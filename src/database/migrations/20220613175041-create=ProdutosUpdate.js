module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('produtos', 'idCategoria', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('produtos', 'idCategoria');
  },
};
