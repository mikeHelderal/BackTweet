import app from './app.js';
import {ENV} from './config/env.js'

//PORT

const PORT = ENV.PORT || 8080;


app.use("/api/users", userRoute);

// LISTEN 
app.listen(PORT, () =>{
    console.log(`Listening at http://localhost:${PORT}`);
})






