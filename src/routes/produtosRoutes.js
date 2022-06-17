import { Router } from 'express';
import produtosController from '../controllers/ProdutosController';

const router = new Router();

router.post('/', produtosController.store);
router.put('/:id', produtosController.update);
router.delete('/:id', produtosController.delete);
router.get('/', produtosController.index);
router.get('/:id', produtosController.show);

export default router;
