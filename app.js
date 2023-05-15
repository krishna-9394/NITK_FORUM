const express = require('express');
const app = express();
const http = require('https');
const server = http.createServer(app);
const port = 8000;
const users = {};

server.listen(port, () => {
	console.log(`Server is listening at the port: ${port}`);
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
	socket.on('new-user-joined', (name) => {
        console.log("New User",name);
        users[socket.id] = name;
		io.emit('user-joined', (name));
	});

	socket.on('send', (message) => {
		io.emit('receive', {message: message,name: users[socket.id]});
	});
});
