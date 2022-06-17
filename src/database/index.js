import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pensamento from '../models/Pensamento';
import Produto from '../models/Produto';
import Venda from '../models/Venda';
import Categoria from '../models/Categoria';

const models = [Pensamento, Produto, Venda, Categoria];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
