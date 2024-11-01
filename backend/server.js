const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const petsRouter = require("./routes/pets");
const path = require('path')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL || process.env.MONGO_DBB, { dbName: "petadopt" })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection failed:', err));
// connectDB();
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', petsRouter);

// const serverPort = process.env.PORT || 5000;
// app.listen(serverPort, () => console.log(`Server running on port ${serverPort}`));
// app.listen(serverPort, () => console.log(`Server running on port ${PORT}`));
// Import Routes
const authRouter = require('./routes/auth');

app.use('/api/auth', authRouter);
app.use("/pets", petsRouter); // Add this line to enable the pets routes

// Connect to MongoDB



app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});