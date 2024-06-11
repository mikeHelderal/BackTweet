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
app.use(cors());




connectDB(env.mongoURI);




app.use('/api/users/', routerUser);
app.use('/api/tweets/' ,routerTweet);




export default app ;