const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const courseController = require('./controllers/courseController');

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
mongoose.connect('mongodb://localhost:27017/SIT725', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.post('/submit', courseController.submitCourseForm);

// Starts Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
