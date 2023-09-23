const Accessory = require('../models/Accessory');


exports.getAllAccessories = () => {
    const accessories = Accessory.find();
    return accessories;
}

exports.createAccessory = (accessory) => {
    Accessory.create(accessory)
}

exports.getOthers = (accessoriesIds) => Accessory.find({_id: {$nin: accessoriesIds}})