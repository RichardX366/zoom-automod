import { Router } from 'express';
import { sentMessage } from '../controllers/chat';

const meetingRouter = Router();

meetingRouter.post('/chat_message_sent', sentMessage);

export default meetingRouter;
