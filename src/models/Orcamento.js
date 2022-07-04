import Sequelize, { Model } from 'sequelize';

export default class Orcamento extends Model {
  static init(sequelize) {
    super.init({
      idServico: Sequelize.INTEGER,
      idPagamento: Sequelize.INTEGER,
      valor: Sequelize.FLOAT,
      observacao: Sequelize.STRING,

    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Servico, {
      foreignKey: 'idServico',
    });
  }
}
