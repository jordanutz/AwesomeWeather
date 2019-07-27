const zipcodes = require('zipcodes')
const axios = require('axios')

module.exports = {
  getWeather: (req, res) => {
    const {zip} = req.body
    let details = zipcodes.lookup(zip)
    axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${details.latitude},${details.longitude}`)
    .then(results => res.status(200).send(results.data))
    .catch(err => console.log(err))
  }
}