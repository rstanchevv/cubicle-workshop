const cubes = [];
const uniquid = require('uniquid')

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
    const newCube = {
        id: uniquid(),
        ...cubeData
    }
    cubes.push(newCube);

    return newCube;
}