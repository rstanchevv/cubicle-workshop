const router = require('express').Router();
const cubeManager = require('../managers/cubeManager')
const accessoryManager = require('../managers/accessoryManager')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create',(req, res) => {
    cubeManager.create(req.body);
    res.redirect('/')
})

router.get('/details/:id',async (req, res) => {
    const cube = await cubeManager.getCurrent(req.params.id).lean()
    const accessories = cube.accessories;
    const hasAccessories = accessories.length > 0;
    if (!cube) {
        return res.redirect('/404')
    }
    res.render('details', {cube, accessories, hasAccessories})
})

router.get('/attach-accessory/:id',async (req, res) => {
    const cube = await cubeManager.getCurrent(req.params.id).lean()
    const accessories = await accessoryManager.getOthers(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;
    res.render('accessory/attach', {cube, accessories, hasAccessories})
})

router.post('/attach-accessory/:id', (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;
    cubeManager.attachAccessory(cubeId, accessoryId);
    res.redirect(`/details/:${cubeId}`)
})

module.exports = router;