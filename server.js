const express = require('express');
const app = express();
const { Server } = require("socket.io");
const io = new Server(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

app.listen(6969, () => {
  console.log('listening on 6969');
});
