import Sequelize, { Model } from 'sequelize';

export default class Venda extends Model {
  static init(sequelize) {
    super.init({
      produtosid: Sequelize.INTEGER,
      quantidade: Sequelize.INTEGER,
      valor: Sequelize.FLOAT,

    }, {
      sequelize,
    });
    return this;
  }
}
