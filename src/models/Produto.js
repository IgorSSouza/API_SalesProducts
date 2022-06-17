import Sequelize, { Model } from 'sequelize';

export default class Produto extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      valor: Sequelize.FLOAT,
      estoque: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Categoria, {
      foreignKey: 'idCategoria',
    });
  }
}
