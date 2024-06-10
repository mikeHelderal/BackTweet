
import {Server} from 'socket.io'
import http from 'http'
import app from '../App.js'



const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});



io.on("connection", (socket) => {
    // ...
    console.log("user connected");   
});

io.on("disconnect", (socket) => {
    console.log("user disconnected");
});

export {server, io};
