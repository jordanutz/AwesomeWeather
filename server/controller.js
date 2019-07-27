const zipcodes = require('zipcodes')
const axios = require('axios')

module.exports = {
  getWeather: (req, res) => {
    const {city, state} = req.body
    let details = zipcodes.lookupByName(city, state)
    axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${details[0].latitude},${details[0].longitude}`)
    .then(results => res.status(200).send(results.data))
    .catch(err => console.log(err))
  }
}