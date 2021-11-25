const morgan = require("morgan");
const helmet = require("helmet");
const api_url = process.env.API_URL;
const router = require("../routes/routes");
const connectDB = require("../config/db");

function middleware(app) {
  app.use(morgan("tiny"));
  app.use(helmet());
  app.use(api_url, router);
  connectDB();
}

module.exports = middleware;
