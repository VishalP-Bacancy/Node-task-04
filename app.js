require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errorHandler } = require('./util/errorHandler');

const friendRoutes = require('./routes/friend');
const userRoutes = require('./routes/user');
const User = require('./models/User');
const Friend = require('./models/friend');

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(friendRoutes)

app.use(errorHandler);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(`Database connected!`)

    app.listen(process.env.PORT || 5500, () => {
       console.log(`Server is running on port ${process.env.PORT || 5500}`);
    })
  }).catch(err => console.log(err))