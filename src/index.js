const express = require('express');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes')
const dbConnect = require('./config/dbConfig')

const app = express();

dbConnect.then((res) => console.log(`db Connected`));

const PORT = 5000;

expressConfig(app)
handlebarsConfig(app)
app.use(routes)


app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})