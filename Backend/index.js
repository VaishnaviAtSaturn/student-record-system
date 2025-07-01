import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Init app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
// Add this after app.use(express.json());
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);
import studentRoutes from './routes/studentRoutes.js';
app.use('/api/students', studentRoutes);



// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
