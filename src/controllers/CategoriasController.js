import Categoria from '../models/Categoria';

class CategoriasController {
  async index(req, res) {
    const categoria = await Categoria.findAll();
    res.json(categoria);
  }

  async store(req, res) {
    try {
      const { nome } = req.body;

      const novaCategoria = await Categoria.create({ nome });

      return res.json(novaCategoria);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CategoriasController();
