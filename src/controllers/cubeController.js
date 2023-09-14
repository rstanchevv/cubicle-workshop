const router = require('express').Router();
const cubeManager = require('../managers/cubeManager')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    cubeManager.create({name, description, imageUrl, difficultyLevel})
    res.redirect('/')
})

router.get('/details/:id', (req, res) => {
    const cube = cubeManager.getCurrent(req.params.id)
    if (!cube) {
        return res.redirect('/404')
    }
    res.render('details', {cube})
})

module.exports = router;