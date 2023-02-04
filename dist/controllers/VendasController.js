"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _venda = require('../models/venda'); var _venda2 = _interopRequireDefault(_venda);

class VendasController {
  

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
