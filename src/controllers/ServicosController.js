import Servico from '../models/Servico';

class ServicosController {
  async index(req, res) {
    const servico = await Servico.findAll();
    res.json(servico);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Faltando Id',
        });
      }

      const servico = await Servico.findByPk(id);

      if (!servico) {
        return res.status(400).json({
          errors: 'Serviço não existe.',
        });
      }

      return res.json(servico);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const { nome } = req.body;

      const novoServico = await Servico.create({
        nome,
      });

      return res.json(novoServico);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Faltando Id',
        });
      }

      const servico = await Servico.findByPk(id);

      if (!servico) {
        return res.status(400).json({
          errors: 'Servico não existe.',
        });
      }

      const servicoAtualizado = await servico.update(req.body);

      return res.json(servicoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Faltando Id.',
        });
      }

      const servico = await Servico.findByPk(id);

      if (!servico) {
        return res.status(400).json({
          errors: 'Serviço não existe!',
        });
      }
      await servico.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ServicosController();
