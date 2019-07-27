const zipcodes = require('zipcodes')
const axios = require('axios')

module.exports = {
  getWeather: (req, res) => {
    const {zip} = req.body
    let details = zipcodes.lookup(zip)
    console.log(details)
  }
}