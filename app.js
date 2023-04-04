const express = require("express");
const app = express();
const CONFIG = require("./config/config");
const connectDB = require("./config/DB");


connectDB();
const PORT = CONFIG.port || 8080;
app.listen(PORT, ()=> {
    console.log(` Server running in ${process.env.NODE_ENV} on port:${PORT}`)
}); 