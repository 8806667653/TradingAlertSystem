import { Router } from 'express';
import { subscribe, list } from '../controllers/subscriptionController.js';
import auth from '../middlewares/authMiddleware.js';

const router = Router();
router.post('/', auth, subscribe);
router.get('/', auth, list);

export default router;
