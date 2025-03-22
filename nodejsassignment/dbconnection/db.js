const mysql = require('mysql2');
const dotenv =require('dotenv');
dotenv.config();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err)=>{
    if (err) throw err;
    console.log('connected to mysql ');
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS school (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
)`;

db.query(createTableQuery, (err, result) => {
 
    console.log('Schools table ready');
});

module.exports = db;



// const mysql = require('mysql2');
// const dotenv = require('dotenv');
// dotenv.config();

// const db = mysql.createConnection(process.env.DATABASE_URL);

// db.connect((err) => {
//     if (err) {
//         console.error(' Failed to connect to MySQL:', err.message);
//         return;
//     }
//     console.log('Connected to MySQL');

//     const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS schools (
//         id INT PRIMARY KEY AUTO_INCREMENT,
//         name VARCHAR(255) NOT NULL,
//         address VARCHAR(255) NOT NULL,
//         latitude FLOAT NOT NULL,
//         longitude FLOAT NOT NULL
//     )`;

//     db.query(createTableQuery, (err, result) => {
//         if (err) {
//             console.error('Error creating schools table:', err.message);
//             return;
//         }
//         console.log('Schools table ready');
//     });
// });

// module.exports = db;
