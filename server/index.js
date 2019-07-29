const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use( express.static( `${__dirname}/../build` ) );

const controller = require('./controller.js')

app.post('/api/weather', controller.getWeather)



PORT = 6700;
app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`)
})

