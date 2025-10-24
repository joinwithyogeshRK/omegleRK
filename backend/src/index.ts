import express from "express";

import { Server, Socket } from "socket.io";
import { createServer } from "http";
const app = express();
const server = createServer(app)


const io = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
});

server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
