const mysql = require('promise-mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_electronjs'
})

getConnection = () => connection

module.exports = { getConnection }