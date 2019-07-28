const zipcodes = require('zipcodes')
const axios = require('axios')

module.exports = {
  getWeather: (req, res) => {
    const {city, state} = req.body
    let details = zipcodes.lookupByName(city, state)
    console.log(details[0])
    axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${details[0].latitude},${details[0].longitude}`)
    .then(results => res.status(200).send({
      forecast: results.data, 
      city: details[0].city,
      state: details[0].state
    }))
    .catch(err => console.log(err))
  }
}