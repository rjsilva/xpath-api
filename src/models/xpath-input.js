const mongoose = require('mongoose')

const XpathSchema = new mongoose.Schema({


    platform: 
    {
        type: String,
        required: true, 
    },
    elementType: 
    {
        type: String, 
        required: true, 
    },
    content: 
    {
        type: String, 
        required: true, 
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Xpath', XpathSchema)