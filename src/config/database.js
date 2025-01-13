// config/database.js
import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';  // Import mysql package
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL Database');
});

export default  db;  // Export the database connection
