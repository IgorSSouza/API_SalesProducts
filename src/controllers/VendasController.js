import Venda from '../models/Venda';
import Produto from '../models/Produto';
import Pagamento from '../models/FormaDePagamento';
import Orcamento from '../models/Orcamento';

class VendasController {
  async index(req, res) {
    const venda = await Venda.findAll({
      attributes: ['id', 'quantidade', 'idPagamento', 'valor', 'created_at'],
      include: {
        model: Produto, Pagamento,
      },

    });
    res.json(venda);
  }

  async store(req, res) {
    try {
      const {
        idProdutos, quantidade, idPagamento,
      } = req.body;

      const produto = await Produto.findByPk(idProdutos);

      const produtoCalc = produto.estoque -= quantidade;

      const valorCalculado = (produto.valor * quantidade);

      if (produtoCalc < 0) {
        return res.status(400).json({
          errors: `O Produto selecionado não possui o estoque de ${quantidade} unidades.Verifique o estoque do produto selecionado.`,
        });
      }

      //Envia os dados referentes para a tabela Produto
      await produto.update({
        id: idProdutos,
        estoque: produtoCalc,
      });

      const venda = await Venda.create({
        idProdutos,
        quantidade,
        valor: valorCalculado,
        idPagamento,
      });
      return res.json(venda);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async storeOrcamento(req, res) {
    const { id } = req.params;
    try {
      const {
        idServico, observacao, valor, idPagamento,
      } = req.body;

      //Envia os dados referentes para a tabela Produto
      const venda = await Venda.create({
        idServico,
        observacao,
        valor,
        idPagamento,
      });

      const orcamento = await Orcamento.findByPk(id);

      if (!orcamento) {
        return res.status(400).json({
          errors: 'Orçamento não existe!',
        });
      }

      await orcamento.destroy();

      return res.json(venda);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new VendasController();
