import Sequelize, { Model } from 'sequelize';

export default class Venda extends Model {
  static init(sequelize) {
    super.init({
      idProduct: Sequelize.INTEGER,
      name: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      price: Sequelize.FLOAT,
      idSupplier: Sequelize.INTEGER,
      idUser: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'idUser',
    });

  }
}
