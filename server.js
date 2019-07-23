const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

app.get('/index', (req, res) => res.send('Api Running'));

//Define route
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/post', require('./routes/api/post'))

const PORT = process.env.PORT || 5000;

//Error

app.listen(PORT, ()=> console.log(`Server Started on Port ${PORT}`));