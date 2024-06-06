import express from 'express'
import { env } from './config.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import routerUser from './Routes/User.Route.js'

const app = express();


app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use("/api/user", routerUser);

export default app ;