import Sequelize, { Model } from 'sequelize';

export default class Formapagamento extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }
}
