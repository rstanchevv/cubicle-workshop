const mongoose = require('mongoose');

const AccessorySchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    Cubes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }]
})

const Accessory = mongoose.model('Accessory', AccessorySchema)

module.exports = Accessory;