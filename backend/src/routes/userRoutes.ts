import { Router } from 'express';
import { getUserController } from '../controllers/userController';

const userRoutes = Router();

userRoutes.get('/', getUserController);


export default userRoutes;