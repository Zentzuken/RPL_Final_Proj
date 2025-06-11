import express from 'express';
import cors from 'cors';
import levelRoutes from './routes/level.js';

const app = express();
const PORT = 3000; // Or use process.env.PORT

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/level', levelRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
