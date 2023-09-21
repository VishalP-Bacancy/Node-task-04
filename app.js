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
  .connect(`mongodb+srv://VishalP-Bacancy:Vishal123-bacancy@cluster0.ogjvwvy.mongodb.net/node-task-04`)
  .then(() => {

    console.log(`Database connected!`)

    app.listen(5500, () => {
       console.log("Server is running on port 5500");
    })
  }).catch(err => console.log(err))