import express from 'express';
import { defaultLevel, createLevel } from '../../model/level.js';

const router = express.Router();

let currentLevel = createLevel(); // hold current state

router.get('/', (req, res) => {
  res.json(currentLevel);
});

router.post('/', (req, res) => {
  const { name, width, height } = req.body;
  currentLevel = createLevel({ name, width, height });
  res.status(201).json(currentLevel);
});

export default router;




