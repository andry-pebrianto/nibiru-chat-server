require('dotenv').config();

module.exports = {
  APP_NAME: process.env.APP_NAME || 'My App',
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  API_URL: process.env.API_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  // database
  DB_HOST: process.env.PGHOST,
  DB_USER: process.env.PGUSER,
  DB_PASSWORD: process.env.PGPASSWORD,
  DB_NAME: process.env.PGDATABASE,
  DB_PORT: process.env.PGPORT,
  // jwt
  JWT_SECRET: process.env.JWT_SECRET,
  // google
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_USER: process.env.EMAIL_USER,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  REDIRECT_URI: process.env.REDIRECT_URI,
  GMAIL_REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN,
  DRIVE_REFRESH_TOKEN: process.env.DRIVE_REFRESH_TOKEN,
};
