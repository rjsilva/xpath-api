const routes = require('express').Router()
const WebXpath = require('../models/xpath-input')

routes.get('/', async (req, res) => {
    const inputXpath = await WebXpath.find()
    return res.statusCode(200).json(inputXpath)
})

routes.post('/web/xpath', async (req, res) => {

    const { platform, elementType, content} = req.body
    const webXpath = await WebXpath.create({
        platform,
        elementType,
        content,
    })

    return res.json({webXpath})
})

module.exports = routes