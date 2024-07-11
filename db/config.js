const mysql = require('mysql');

function createConnection() {
    const connection = mysql.createConnection({
        connectionLimit: 151,
        host: 'localhost',
        database: 'new_project',
        user: 'root',
        password: '',                                          
    }); 

    connection.connect(function (error) {
        if (error) {
            throw error;
        } else {
            console.log(' Database Connected');
        }
    });

    return connection;
}

module.exports = createConnection;