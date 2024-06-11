import express from 'express'
import { env } from './config.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import routerUser from './Routes/User.Route.js'
import routerTweet from './Routes/Tweet.Route.js'
import connectDB from './config/db.js'

const app = express();


app.use(express.json())
app.use(cookieParser())




connectDB(env.mongoURI);


app.use((req, res, next) => {
    res.setHeader("Acces-control-Allow-Origin","http://localhost:5173");
    res.setHeader("Acces-control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Acces-Control-Allow-Credentials", true);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });


app.use('/api/users/', routerUser);
app.use('/api/tweets/' ,routerTweet);




export default app ;