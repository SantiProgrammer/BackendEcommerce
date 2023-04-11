import { Router } from 'express';
import { getUserProfile, getSessionInfo, postOrder } from '../controllers/userController.js';
import { checkAuthentication } from '../middleware/passportAuth.js';

const router = new Router();

router.get('/profile', checkAuthentication, getUserProfile);

router.get('/sessionInfo', checkAuthentication, getSessionInfo);

router.post('/order', checkAuthentication, postOrder);


export { router as userRouter };

