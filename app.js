const express = require("express");
const morgan = require ("morgan");

//load config folder
const CONFIG = require("./config/config");
const connectDB = require("./config/DB");


//initialize app
const app = express();

//"dev" is a predefined Morgan Format for development environment, sttyled to add greens for token Status.. we use it as a morgan middleware here
if(  process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

//mongo Atlas Connected call
connectDB();

const PORT = CONFIG.port || 8080;

// App listens for server connection
app.listen(PORT, ()=> {
    console.log(` Server running in ${process.env.NODE_ENV} on port:${PORT}`)
}); 