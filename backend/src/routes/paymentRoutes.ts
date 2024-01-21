import { Router } from 'express';
import { chargeUserController, paymentByTxController } from '../controllers/paymentController';

const paymentRoutes = Router();

paymentRoutes.post('/tx', paymentByTxController);
paymentRoutes.post('/charge', chargeUserController);


export default paymentRoutes;