const Cube = require('../models/Cube')

exports.getAll = () => {
  const cubes = Cube.find({});
  return cubes;
}
exports.getCurrent = (id) => Cube.findById(id).populate('accessories');

exports.create = (cubeData) => {
  Cube.create(cubeData);
  console.log(`Cube created successfully.`)
};

exports.attachAccessory =async (cubeId, accessoryId) => {
  const cube =await Cube.findById({_id: cubeId});
  cube.accessories.push(accessoryId);
  await cube.save();
}
