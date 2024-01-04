const express = require('express');
const authRoutes = require('./routes/auth-routes');
const mongoose = require('mongoose');
const env = require('dotenv');
const cors = require('cors');

const app = express();
env.config()
app.use(cors())
app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(4000, () => {
        console.log('Server is listening on port 4000');
    })
})
.catch((e) => {
    console.log(e)
})