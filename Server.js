import express from 'express'
import { env } from './config.js'
import app from './App.js'
import {Server} from './Services/Socket.js'
import http from 'http'



const PORT = env.port || 8080




server.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})
