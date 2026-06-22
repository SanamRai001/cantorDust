import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Import routes
import teamRoutes from './routes/teamRoutes.js';
import privateSectorRoutes from './routes/privateWorksRoutes.js';
import developmentWorkRoutes from './routes/developmentWorksRoutes.js';
import serviceRoutes from './routes/servicesRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', teamRoutes);
app.use('/api', privateSectorRoutes);
app.use('/api', developmentWorkRoutes);
app.use('/api', serviceRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'API is running',
    endpoints: {
      team: '/api/team',
      privateSector: '/api/private-sector',
      developmentWorks: '/api/development-works',
      services: '/api/services'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// Connect to MongoDB and start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
});