import { Router } from 'express';
import meetingRouter from './meeting';

const baseRouter = Router();

baseRouter.get('/', (req, res) => {
  res.send('Everything works fine.');
});

baseRouter.use('/meeting', meetingRouter);

export default baseRouter;
