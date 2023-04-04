const mongoose = require("mongoose");
const CONFIG = require("./config");

const connectDB = async () =>{
    try {
      const conn = await mongoose.connect(CONFIG.mongo_uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (err) {
        console.log({error: err.message})
        //exits with failure
        process.exit(1);
    }
}

module.exports = connectDB;