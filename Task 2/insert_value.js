/*const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1',
    database: 'activity_db'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `INSERT INTO customers (first_name, last_name) VALUES (${firstName}, ${lastName})`;
  con.query(sql, function (err, result) {
    if(err) throw err;
    console.log("1 record inserted");
  });
});*/