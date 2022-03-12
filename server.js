const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./model/user');
const server = express();
const path = require('path');
const userRoutes = require('./routes/users.js');

dotenv.config({path: './config.env'});

mongoose.connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true});

server.use(express.urlencoded({extended: true})); // send to server
server.use(express.json()); // receive from server
server.use(userRoutes);

server.set('views', path.join(__dirname, 'views'));
server.set(express.static('public'));
server.set('view engine', 'ejs');

server.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})