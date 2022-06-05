const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

// DB connection
connectDB();
//  initialize app
const app = express();

const PORT = process.env.PORT || 8080;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v2/rooms', require('./routes/roomRoutes'));
app.use('/api/v2/reservation', require('./routes/reservationRoutes'));
app.use('/api/v2/category', require('./routes/categoryRoutes'));
app.use('/api/v2/auth', require('./routes/authRoutes'));
//  404 route
app.use('*', (req, res) =>
  res.status(404).json({ message: 'The requested route does not exist' })
);
//  Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
