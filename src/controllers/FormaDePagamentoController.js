import FormaDePagamento from '../models/FormaDePagamento';

class FormaDePagamentoController {
  async index(req, res) {
    const formaPagamento = await FormaDePagamento.findAll();
    res.json(formaPagamento);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Faltando Id',
        });
      }

      const formaPagamento = await FormaDePagamento.findByPk(id);

      if (!formaPagamento) {
        return res.status(400).json({
          errors: 'Produtos não existe.',
        });
      }

      return res.json(formaPagamento);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const { tipo } = req.body;

      const novoFormaPagamento = await FormaDePagamento.create({
        tipo,
      });

      return res.json(novoFormaPagamento);
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

      const formaPagamento = await FormaDePagamento.findByPk(id);

      if (!formaPagamento) {
        return res.status(400).json({
          errors: 'Produtos não existe.',
        });
      }

      const formaPagamentoAtualizada = await formaPagamento.update(req.body);

      return res.json(formaPagamentoAtualizada);
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

      const formaPagamento = await FormaDePagamento.findByPk(id);

      if (!formaPagamento) {
        return res.status(400).json({
          errors: 'Aluno não existe!',
        });
      }
      await FormaDePagamento.destroy();
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

export default new FormaDePagamentoController();
