import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import './database';

import express from 'express';

import vendaRoutes from './routes/vendasRoutes';
import tokenRoutes from './routes/tokenRoutes';

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
    this.app.use('/vendas/', vendaRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
