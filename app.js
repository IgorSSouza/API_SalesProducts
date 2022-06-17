import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import produtosRoutes from './src/routes/produtosRoutes';
import vendasRoutes from './src/routes/vendasRoutes';
import categoriasRoutes from './src/routes/categoriasRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/produtos/', produtosRoutes);
    this.app.use('/vendas/', vendasRoutes);
    this.app.use('/categorias/', categoriasRoutes);
  }
}

export default new App().app;
