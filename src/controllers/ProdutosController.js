import Categoria from '../models/Categoria';
import Produto from '../models/Produto';
import Venda from '../models/Venda';

class ProdutosController {
  async index(req, res) {
    const produto = await Produto.findAll({
      attributes: ['id', 'nome', 'valor', 'estoque'],
      include: {
        model: Categoria,
      },
    });
    res.json(produto);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Faltando Id',
        });
      }

      const produto = await Produto.findByPk(id, {
        attributes: ['id', 'nome', 'valor', 'estoque'],
        include: Categoria,
      });

      if (!produto) {
        return res.status(400).json({
          errors: 'Produtos não existe.',
        });
      }

      return res.json(produto);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const {
        nome, valor, estoque, idCategoria,
      } = req.body;

      const novoProduto = await Produto.create({
        nome, valor, estoque, idCategoria,
      });

      return res.json(novoProduto);
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

      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(400).json({
          errors: 'Produtos não existe.',
        });
      }

      const produtoAtualizado = await produto.update(req.body);

      return res.json(produtoAtualizado);
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

      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(400).json({
          errors: 'Aluno não existe!',
        });
      }

      const opVenda = await Venda.update({ idProdutos: null }, { where: { idProdutos: id } });

      if (opVenda) {
        await produto.destroy();
      }

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

export default new ProdutosController();
