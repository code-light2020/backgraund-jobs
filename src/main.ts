import 'dotenv/config';
import express, { Request, Response } from 'express';
import MAilService from './app/service/MailService';

const app = express();
app.use(express.json());

app.get('/', (re: Request, res: Response) =>
  res.json({ message: 'ola mundo' }),
);

app.post('/register', async (req: Request, res: Response) => {
  const { name, password, email } = req.body;
  MAilService.send({ name, email, password });
  return res.status(200).json({ message: 'User created' });
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('app runnig o port 3000'));
