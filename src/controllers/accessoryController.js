const router = require('express').Router();
const accessoryManager = require('../managers/accessoryManager')

router.get('/add', (req, res) => {
    res.render('accessory/create')
})

router.post('/add', (req, res) => {
    accessoryManager.createAccessory(req.body)
    res.redirect(`/`)
})

module.exports = router;
