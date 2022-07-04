module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orcamentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_Servico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'servicos',
          key: 'id',
        },
      },
      id_Pagamento: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'formapagamentos',
          key: 'id',
        },
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('vendas');
  },
};
