const routes = require('express').Router()
const WebXpath = require('../models/xpath-web')

routes.get('/xpaths', (req, res) => {
    return res.json({ok : 'ok'})
})

routes.post('/web/xpath', async (req, res) => {

    const { platform, elementType, xpath} = req.param
    const webXpath = await WebXpath.create({
        platform,
        elementType,
        xpath,
    })

    return res.json(webXpath)
})

module.exports = routes