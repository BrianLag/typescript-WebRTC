import express from 'express';
import http from "http";

const app = express();
const server = http.createServer(app)
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: [ "GET", "POST" ]
  }
})

io.on("connection", (socket: any) => {
  socket.emit("me", socket.id)

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded")
  })

  socket.on("callUser", (data: any) => {
    io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
  })

  socket.on("answerCall", (data: any) => {
    io.to(data.to).emit("callAccepted"), data.signal
  })
})

server.listen(5000, () => console.log('running on port 5000'));