const dotenv = require("dotenv")
dotenv.config()
module.exports = {
  PORT: process.env.REACT_APP_PORT,
  CHOKIDAR_USEPOLLING: process.env.REACT_APP_CHOKIDAR_USEPOLLING,
  APP_NAME: process.env.REACT_APP_APP_NAME,
  SERVER_URL: process.env.REACT_APP_SERVER_URL,
  USER_TYPE_USERDASHBOARD: "userDashboard",
  USER_TYPE_ADMIN: "admin", //
}
