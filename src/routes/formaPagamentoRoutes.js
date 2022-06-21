import { Router } from 'express';
import formaDePagamentoController from '../controllers/FormaDePagamentoController';

const router = new Router();

router.post('/', formaDePagamentoController.store);
router.put('/:id', formaDePagamentoController.update);
router.delete('/:id', formaDePagamentoController.delete);
router.get('/', formaDePagamentoController.index);
router.get('/:id', formaDePagamentoController.show);

export default router;
