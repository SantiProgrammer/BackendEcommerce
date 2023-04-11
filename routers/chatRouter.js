import { Router } from 'express';
import { getMessageData, postMessageController } from '../controllers/chatController.js';
import { checkAuthentication } from '../middleware/passportAuth.js';

const router = new Router();

router.get('/', checkAuthentication, getMessageData);
router.post('/', postMessageController);

export { router as chatRouter };

