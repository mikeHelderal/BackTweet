import express from 'express'
import { env } from './config.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import routerUser from './Routes/User.Route.js'

const app = express();

const PORT = env.port || 8080

app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use("/api/user", routerUser);


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})
