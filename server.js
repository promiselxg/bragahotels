const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v2', require('./routes/roomRoutes'));
app.use('/api/v2/category', require('./routes/categoryRoutes'));

//  Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
