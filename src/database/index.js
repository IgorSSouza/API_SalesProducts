import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Venda from '../models/venda';

import User from '../models/User';

const models = [
  Venda,
  User,
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
