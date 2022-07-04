import Sequelize, { Model } from 'sequelize';

export default class Venda extends Model {
  static init(sequelize) {
    super.init({
      idProdutos: Sequelize.INTEGER,
      idServico: Sequelize.INTEGER,
      quantidade: Sequelize.INTEGER,
      observacao: Sequelize.STRING,
      idPagamento: Sequelize.INTEGER,
      valor: Sequelize.FLOAT,

    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Produto, {
      foreignKey: 'idProdutos',
    });
  }
}
