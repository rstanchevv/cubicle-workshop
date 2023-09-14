const uniquid = require("uniquid");
const cubes = [
  {
    id: uniquid(),
    name: "Random cube",
    description: "some random cube",
    imageUrl:
      "https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/cube_icon_kjijxo.jpg",
    difficultyLevel: 3,
  },
  {
    id: uniquid(),
    name: "Test cube",
    description: "some test cube",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Rubiks_cube_solved.jpg",
    difficultyLevel: 1,
  },
];


exports.getAll = (search, from, to) => {
  let result = cubes.slice();

  if (search) {
    result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
  }
  if (from) {
    result = result.filter(cube => cube.difficultyLevel >= from)
  }
  if (to){
    result = result.filter(cube => cube.difficultyLevel <= to)
  }

  return result;
}

exports.getCurrent = (id) => {
  const cube = cubes.find((cube) => cube.id == id);
  return cube;
};

exports.create = (cubeData) => {
  const newCube = {
    id: uniquid(),
    ...cubeData,
  };
  cubes.push(newCube);

  return newCube;
};
