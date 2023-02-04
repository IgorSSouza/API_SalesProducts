import { Router } from 'express';
import vendasController from '../controllers/VendasController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', vendasController.store);

export default router;
