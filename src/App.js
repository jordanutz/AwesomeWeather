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
      stateDetails: null, 
      current: null
    }
  }

  retrieveForecast = (city, state) => {
    axios.post('/api/weather', {city, state}).then(res => {
      this.setState({
        current: res.data.current,
        weather: res.data.forecast,
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
          current={this.state.current}
        />
      </div>
    )
  }
}

export default App
