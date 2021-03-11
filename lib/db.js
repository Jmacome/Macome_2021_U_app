const mysql = require('mysql');
const dotenv = require('dotenv');
// let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.HOST || 'localhost',
    user:process.env.USER || 'root',
    password:process.env.PASSWORD || 'Programming1018',
    database:process.env.DATABASE || 'mydb',
    port:process.env.DB_PORT || '3306'
});

connection.connect((error) => {
    if(error) 
        console.log(error)
    else {
        console.log('Database is ' + connection.state);
    }
})

module.exports = connection;