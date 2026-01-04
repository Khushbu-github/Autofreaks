const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const fs = require('fs');
const path = require('path');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    "https://www.autofreaks.in",
    "https://autofreaks.in",
    "https://api.autofreaks.in",
    "http://localhost:5173"
  ],
  credentials: true
}));
app.use(express.json());

// ✅ Base Route
app.get('/', (req, res) => {
  res.send('AutoFreaks Backend is running 🚀');
});

// ✅ Health Check
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'AutoFreaks API is live 🚀'
  });
});

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/gallery', require('./routes/gallery'));
app.use('/cars', require('./routes/cars'));

// Create uploads folder if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
