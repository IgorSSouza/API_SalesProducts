import { Router } from 'express';
import ServicosController from '../controllers/ServicosController';

const router = new Router();

router.post('/', ServicosController.store);
router.put('/:id', ServicosController.update);
router.delete('/:id', ServicosController.delete);
router.get('/', ServicosController.index);
router.get('/:id', ServicosController.show);

export default router;
