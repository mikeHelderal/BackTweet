import express from 'express'
import { ENV } from './config/env.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from "./config/db.js"

//import routerUser from './Routes/User.Route.js'

const app = express();


app.use(express.json())
app.use(cookieParser())
app.use(cors());

//bdd
connectDB(ENV.mongo)

//app.use("/api/user", routerUser);

export default app ;