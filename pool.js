/**
 * Created by Administrator on 2018/1/9.
 */
const mysql = require('mysql')

let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'whtl2017719',
    database: 'tl',
    multipleStatements: 10
})

module.exports = pool