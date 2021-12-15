import express, { Request, Response } from 'express';

const app = express();

app.get('/', (re: Request, res: Response) =>
  res.json({ message: 'ola mundo' }),
);

app.post('/register', async (req: Request, res: Response) => {
  const { name, message, email } = req.body;
  return res.status(200).json({ message: 'User created' });
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('app runnig o port 3000'));
