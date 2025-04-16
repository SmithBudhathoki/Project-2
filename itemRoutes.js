// routes/itemRoutes.js
import express from 'express';
import { createItem } from '../controllers/itemController.js';

const router = express.Router();

// POST /api/items
router.post('/items', createItem);

export default router;
