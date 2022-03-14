const express = require('express');
const server = express();
const path = require('path');
const routes = require('./routes/routes.js');

server.use(express.static("public"));
server.use(express.urlencoded({extended: true})); // send to server
server.use(express.json()); // receive from server
server.use(routes);

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.listen(3000, () => {
    console.log(`WebApp running at http://localhost:3000`);
})