const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()


/**
 * Data base
 */

 mongoose.connect('mongodb://localhost:27017/xpaths', {
     useNewUrlParser: true
 })

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require('./routers/web-routes'))
app.use(morgan('dev'))
app.use(cors())
app.listen(3000)