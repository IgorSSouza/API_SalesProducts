import Pensamento from '../models/Pensamento';

class HomeController {
  async index(req, res) {
    const pensamento = await Pensamento.findAll();
    res.json(pensamento);
  }

  async store(req, res) {
    try {
      const pensamento = await Pensamento.create(req.body);
      return res.json(pensamento);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new HomeController();
