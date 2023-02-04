import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import './src/database';

import express from 'express';

import vendasRoutes from './src/routes/vendasRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

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
    this.app.use('/vendas/', vendasRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
