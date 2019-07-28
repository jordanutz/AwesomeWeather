import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

// Components 
import Input from './Components/Input/Input';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component {
  constructor () {
    super()
    this.state = {
      weather: null, 
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
      })
    })
  }

  resetForecast = (resetInput) => {
    this.setState({
      weather: null, 
      cityDetails: null, 
      stateDetails: null,
      current: null,
    })
    resetInput()
  }

  render () {

    const {retrieveForecast, resetForecast} = this;
    const {cityDetails, stateDetails, weather, current} = this.state;

    // if (this.state.weather) {
    //   console.log(this.state.weather)
    // }

    return (
      <div className="App">
        <Input 
          retrieveForecast={retrieveForecast}
          resetForecast={resetForecast}
        />

        <Dashboard 
          city={cityDetails}
          state={stateDetails}
          weather={weather}
          current={current}
        />
      </div>
    )
  }
}

export default App;
