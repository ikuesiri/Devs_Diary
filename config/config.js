require("dotenv").config();

 const CONFIG = {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI
};

module.exports = CONFIG;