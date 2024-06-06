import express from 'express'
import { env } from './config.js'
import app from './App.js'


const PORT = env.port || 8080



app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})
