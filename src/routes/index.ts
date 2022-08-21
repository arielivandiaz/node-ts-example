import { Router } from 'express';

const router = Router();

router.get('/', (_req, _res) => {
  _res.send('Fetching all data');
});

router.get('/ping', (_req, _res) => {
  _res.send('Pong');
});

export default router;
