require('dotenv').config()
const { Pool } = require('pg')

const connectionDevelopment = {
    database: process.env.DEV_DB_NAME,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    host: 'localhost',
    port: 5432
}

const connectionProduction = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionDevelopment)
module.exports = pool;