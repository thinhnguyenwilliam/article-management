import express from 'express';
import { getAllArticles } from '../controllers/userController';

const router = express.Router();

//router.post('/users', createUser);
router.get('/articles', getAllArticles);

export default router;
