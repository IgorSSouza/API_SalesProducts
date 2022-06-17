import { Router } from 'express';
import categoriasController from '../controllers/CategoriasController';

const router = new Router();

router.post('/', categoriasController.store);
router.get('/', categoriasController.index);

export default router;
