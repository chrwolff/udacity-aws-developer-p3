require('dotenv').config();

export const config = {
  'username': process.env.DB_USERNAME,
  'password': process.env.DB_PASSWORD,
  'database': process.env.DB_NAME,
  'host': process.env.DB_HOST,
  'dialect': process.env.DB_DIALECT,
  'url': process.env.URL,
  'port': process.env.PORT || 8081, // default port to listen
  'jwt': {
    'secret': process.env.JWT_SECRET,
  }
};
