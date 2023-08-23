import { Router } from 'express';
import { indexView } from '../controllers/index.controllers.js';
const router = Router();
//Routes
router.get('/', indexView);
export default router;