import Sequelize, { Model } from 'sequelize';

export default class Pensamento extends Model {
  static init(sequelize) {
    super.init({
      situacao: Sequelize.STRING,
      pensamentosautomaticos: Sequelize.STRING,
      emocoes: Sequelize.STRING,
      comportamentos: Sequelize.STRING,
      respostaadaptativa: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
