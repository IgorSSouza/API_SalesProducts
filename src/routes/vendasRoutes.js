import { Router } from 'express';
import vendasController from '../controllers/VendasController';

const router = new Router();

router.put('/', vendasController.store);
router.post('/:id', vendasController.storeOrcamento);
router.get('/', vendasController.index);

export default router;
