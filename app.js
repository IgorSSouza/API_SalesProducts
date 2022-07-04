import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import produtosRoutes from './src/routes/produtosRoutes';
import servicosRoutes from './src/routes/servicosRoutes';
import vendasRoutes from './src/routes/vendasRoutes';
import categoriasRoutes from './src/routes/categoriasRoutes';
import formaDePagamentoRoutes from './src/routes/formaPagamentoRoutes';
import orcamentosRoutes from './src/routes/orcamentosRoutes';

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
    this.app.use('/servicos/', servicosRoutes);
    this.app.use('/vendas/', vendasRoutes);
    this.app.use('/categorias/', categoriasRoutes);
    this.app.use('/formadepagamento/', formaDePagamentoRoutes);
    this.app.use('/orcamentos/', orcamentosRoutes);
  }
}

export default new App().app;
