const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()


/**
 * Data base
 */
//mongodb+srv://deploy:<password>@cluster0-v7uhu.mongodb.net/<dbname>?retryWrites=true&w=majority
 mongoose.connect('mongodb://localhost:27017/xpaths', {
     useNewUrlParser: true
 })

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require('./routers/web-routes'))
app.use(morgan('dev'))
app.use(cors())
app.listen(3000)