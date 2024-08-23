const express = require('express')
const app = express()
const {constant} = require('./src/helper/constant')
const userRouter = require('./src/router/userRouter')
const {connection} = require('./src/postgres/postgres')

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(constant.router.user.all, userRouter);

app.listen(constant.port, () => {
    console.log(`Example app listening on port ${constant.port}`)
})

connection()