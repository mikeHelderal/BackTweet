import express from 'express'
import { ENV } from './config/env.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from "./config/db.js"


import routerLike from './Routes/Like.Route.js'
import routerTweet from './Routes/Tweet.Route.js'

const app = express();


app.use(express.json())
app.use(cookieParser())
app.use(cors());

//bdd
connectDB(ENV.mongo)

app.use("/api/like", routerLike);
app.use("/api/tweet", routerTweet)

export default app ;