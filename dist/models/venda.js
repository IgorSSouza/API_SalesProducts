"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Venda extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      idProduct: _sequelize2.default.INTEGER,
      name: _sequelize2.default.STRING,
      quantity: _sequelize2.default.INTEGER,
      price: _sequelize2.default.FLOAT,
      idSupplier: _sequelize2.default.INTEGER,
      idUser: _sequelize2.default.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Venda;
