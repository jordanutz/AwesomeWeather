import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

// Components 
import Input from './Components/Input/Input'
import Dashboard from './Components/Dashboard/Dashboard'

class App extends Component {
  constructor () {
    super()
    this.state = {
      weather: null, 
      error: false, 
      cityDetails: null, 
      stateDetails: null
    }
  }

  retrieveForecast = (city, state) => {
    axios.post('/api/weather', {city, state}).then(res => {

      let filteredForecast = res.data.forecast.daily.data.filter( (daily, index) => index > 1 && index <= 6)

      this.setState({
        weather: filteredForecast,
        cityDetails: res.data.city, 
        stateDetails: res.data.state,
        error: false
      })
    })
  }

  render () {

    // if (this.state.weather) {
    //   console.log(this.state.weather)
    // }

    const errorMessage = "Please input all required fields";

    return (
      <div className="App">
        <Input 
          retrieveForecast={this.retrieveForecast}
          errorMessage={errorMessage}
          findError={this.state.error}
        />
        <Dashboard 
          city={this.state.cityDetails}
          state={this.state.stateDetails}
          weather={this.state.weather}
        />
      </div>
    )
  }
}

export default App
