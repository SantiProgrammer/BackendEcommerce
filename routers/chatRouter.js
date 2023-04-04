import { Router } from 'express';
import { getChat, postMessageController } from '../controllers/chatController.js';
import { checkAuthentication } from '../middleware/passportAuth.js';

const router = new Router();

router.get('/', checkAuthentication, getChat);
router.post('/', postMessageController);

export { router as chatRouter };

