import Venda from '../models/Venda';
import Produto from '../models/Produto';

class VendasController {
  async index(req, res) {
    const produto = await Venda.findAll();
    res.json(produto);
  }

  async store(req, res) {
    try {
      const { idProdutos, quantidade, idPagamento } = req.body;

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
}

export default new VendasController();
