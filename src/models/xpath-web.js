const mongoose = require('mongoose')

const WebXpath = new mongoose.Schema({
    platform: String,
    elementType: String,
    xpath: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('WebXpath', WebXpath)