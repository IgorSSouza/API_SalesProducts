import User from '../models/User';
import Venda from '../models/venda';

class VendasController {
  async index(req, res) {
    const venda = await Venda.findAll({
      attributes: ['id','idProduct','name','quantity','price','idSupplier','created_at'],
      include: {
      model: User,
      attributes: ['id','nome','email']
    },});
    res.json(venda);
  }

  async store(req, res) {
    try {
      const {
        idProduct, name, quantity, price, idSupplier, idUser,
      } = req.body;

      const novaVenda = await Venda.create({
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

export default new VendasController();
