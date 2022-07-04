import Orcamento from '../models/Orcamento';
import Servico from '../models/Servico';

class OrcamentosController {
  async index(req, res) {
    const orcamento = await Orcamento.findAll({
      include: {
        model: Servico,
      },
    });
    res.json(orcamento);
  }

  async store(req, res) {
    try {
      const { idServico, valor, observacao } = req.body;

      const orcamento = await Orcamento.create({
        idServico, valor, observacao,
      });

      return res.json(orcamento);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Faltando Id',
        });
      }

      const orcamento = await Orcamento.findByPk(id, {
        include: Servico,
      });

      if (!orcamento) {
        return res.status(400).json({
          errors: 'Produtos não existe.',
        });
      }

      return res.json(orcamento);
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

      const orcamento = await Orcamento.findByPk(id);

      if (!orcamento) {
        return res.status(400).json({
          errors: 'Orçamento não existe.',
        });
      }

      const orcamentoAtualizado = await orcamento.update(req.body);

      return res.json(orcamentoAtualizado);
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

      const orcamento = await Orcamento.findByPk(id);

      if (!orcamento) {
        return res.status(400).json({
          errors: 'Orçamento não existe!',
        });
      }
      await orcamento.destroy();
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

export default new OrcamentosController();
