const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

const studentRoutes = require('./routes/studentRoutes');
app.use('/student', studentRoutes);

app.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
});