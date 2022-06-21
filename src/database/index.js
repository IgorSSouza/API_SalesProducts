import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pensamento from '../models/Pensamento';
import Produto from '../models/Produto';
import Servico from '../models/Servico';
import Venda from '../models/Venda';
import Categoria from '../models/Categoria';
import FormaDePagamento from '../models/FormaDePagamento';

const models = [
  Pensamento,
  Produto,
  Venda,
  Categoria,
  FormaDePagamento,
  Servico,
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
