import express from 'express';
import productRoutes from './product.routes.js';
import userRoutes from './user.routes.js';
import authRoutes from './auth.routes.js';
const router = express.Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);


export default router;
