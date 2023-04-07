import { Router } from 'express';
import { getUserProfile, getSessionInfo } from '../controllers/userController.js';
import { checkAuthentication } from '../middleware/passportAuth.js';

const router = new Router();

router.get('/profile', checkAuthentication, getUserProfile);

router.get('/sessionInfo', checkAuthentication, getSessionInfo);


export { router as userRouter };

