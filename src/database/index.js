import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pensamento from '../models/Pensamento';
import Produto from '../models/Produto';
import Servico from '../models/Servico';
import Venda from '../models/Venda';
import Categoria from '../models/Categoria';
import FormaDePagamento from '../models/FormaDePagamento';
import Orcamento from '../models/Orcamento';

const models = [
  Pensamento,
  Produto,
  Venda,
  Categoria,
  FormaDePagamento,
  Servico,
  Orcamento,
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
