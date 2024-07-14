const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const db = require('./db');
const dishRouter = require('./router/dishRouter');
const Dish = require("./model/dishModel")

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    // origin: "http://localhost:3000",
    origin:"https://real-time-toggle.onrender.com",
    methods: ["GET", "PUT"]
  }
});

app.use(cors());
app.use(express.json());
app.use('/api', dishRouter(io));

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
