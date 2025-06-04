const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1',
    database: 'activity_db'
});

con.connect((err) => {
    if (err) {
        console.error('Connection error:', err.stack);
    }
    console.log("");
    console.log('Database connection established!');
    
    con.query("CREATE DATABASE activity_db", function (err, result) {
        if(err) throw err;
        console.log("Database created!");
    });

    var sql = "CREATE TABLE tbl_customers (first_name VARCHAR(255), last_name VARCHAR(255))";
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log("Table created!");
    });

});