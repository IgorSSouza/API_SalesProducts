import { Router } from 'express';
import orcamentosController from '../controllers/OrcamentosController';

const router = new Router();

router.post('/', orcamentosController.store);
router.get('/', orcamentosController.index);
router.get('/:id', orcamentosController.show);
router.put('/:id', orcamentosController.update);
router.delete('/:id', orcamentosController.delete);

export default router;
