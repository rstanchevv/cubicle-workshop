const mongoose = require('mongoose');
const dbConnect = mongoose.connect('mongodb://localhost:27017/cubicles');
module.exports = dbConnect;
