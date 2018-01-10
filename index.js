/**
 * Created by Administrator on 2018/1/8.
 */
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser');
const pool = require('./pool')
let app = express()
let server = http.createServer(app).listen(8756);
let io = require('socket.io')(server)
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'))

io.on('connection', (socket) => {
    socket.on('send', (msg) => {
        pool.query('select * from tlplc ', (err, result) => {
            if (err) throw err
            socket.emit('getmsg', result)
        })
        setInterval(() => {
            pool.query('select * from tlplc ', (err, result) => {
                if (err) throw err
                socket.emit('getmsg', result)
            })
        }, 10000)
    })
})
app.post('/index', (req, res) => {
    let arr = []
    let name = req.body[0]
    for (var i in req.body) {
        arr.push(req.body[i])
    }
    console.log(req.body)
    console.log(arr)
    if (arr.length < 13) {
        res.send('数据缺失')
    } else {
        pool.query("REPLACE INTO tlplc VALUES('1',?,?,?,?,?,?,?,?,?,?,?,?,?)", arr, (err, result) => {
            if (err)throw err
            if (result.affectedRows == 2) {
                pool.query('select * from tlweb where a=?', name, (err, result) => {
                    if (err) throw err
                    var str = '#'
                    for (var i in result[0]) {
                        if (i === 'wid') continue
                        str += `${result[0][i]}&`
                    }
                    console.log(str)
                    res.send(str)
                })
            }
        })
    }
})
app.post('/getmsg', (req, res) => {
    console.log(req.body);
    var arr = req.body.submit.split(',')
    pool.query("UPDATE tlweb SET b=?,c=?,d=?,e=?,f=?,g=?,h=?,i=?,gg=?,hh=?,ii=?,cc=? WHERE a=?", arr, (err, result) => {
        if (err)throw err
        console.log(result);
    })
})

