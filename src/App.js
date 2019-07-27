import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

// Components 
import Navigation from './Components/Navigation/Navigation'
import Input from './Components/Input/Input'
import Display from './Components/Display/Display'

class App extends Component {
  constructor () {
    super()
    this.state = {
      weather: null, 
      error: false
    }
  }

  retrieveForecast = (city, state) => {
    axios.post('/api/weather', {city, state}).then(res => {
      this.setState({
        weather: res.data.daily.data, 
        error: false
      })
    })
  }

  render () {

    if (this.state.weather) {
      console.log(this.state.weather)
    }

    const errorMessage = "Please input all required fields"

    return (
      <div className="App">
        <Input 
          retrieveForecast={this.retrieveForecast}
          errorMessage={errorMessage}
          findError={this.state.error}
        />

      </div>
    )
  }
}

export default App
