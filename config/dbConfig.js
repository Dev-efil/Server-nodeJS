const mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mobapp'
});
// connection.getConnection(function(error)
// {
//     if(error)
//     {
//         console.log('Error: can not connect database.');
//     }
//     else
//     {
//         console.log('Database successfully connected.');
//     }
// });
module.exports = connection;
