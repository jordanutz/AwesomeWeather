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
      zip: '',
      weather: []
    }
  }

  inputZip = (event) => {
    this.setState({
      zip: event.target.value
    })
  }

  retrieveForecast = (zip) => {
    axios.post('/api/weather', {zip}).then(res => {
      console.log(res.data)
    })
  }

  render () {
    return (
      <div className="App">
      <h1>Herro</h1>
      <h2>Please enter your zip code!</h2>
      <input onChange={(e) => this.inputZip(e)} type="text" value={this.state.zip}/>
      <button onClick={() => this.retrieveForecast(this.state.zip)}>Submit</button>
    </div>
    )
  }
}

export default App
