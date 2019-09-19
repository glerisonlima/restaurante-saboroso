const mysql = require('mysql2');
 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'saboroso',
    password: 'm0110484'

  });

  module.exports = connection