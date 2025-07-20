import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../../controllers/user.controller.js';

const router = express.Router();

// GET /api/v1/users
router.get('/', getAllUsers);

// GET /api/v1/users/:id
router.get('/:id', getUserById);

// POST /api/v1/users
router.post('/', createUser);

// PUT /api/v1/users/:id
router.put('/:id', updateUser);

// DELETE /api/v1/users/:id
router.delete('/:id', deleteUser);

export default router;
