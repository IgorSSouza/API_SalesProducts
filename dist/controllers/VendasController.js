"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _venda = require('../models/venda'); var _venda2 = _interopRequireDefault(_venda);

class VendasController {
  async index(req, res) {
    const venda = await _venda2.default.findAll({
      attributes: ['id','idProduct','name','quantity','price','idSupplier','created_at'],
      include: {
      model: _User2.default,
      attributes: ['id','nome','email']
    },});
    res.json(venda);
  }

  async store(req, res) {
    try {
      const {
        idProduct, name, quantity, price, idSupplier, idUser,
      } = req.body;

      const novaVenda = await _venda2.default.create({
        idProduct, name, quantity, price, idSupplier, idUser,
      });

      return res.json(novaVenda);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

 
}

exports. default = new VendasController();
