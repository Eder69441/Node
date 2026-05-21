const mysql = require('mysql2/promise')

const connection =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cine'
})


module.exports = connection