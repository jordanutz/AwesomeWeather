import React, {Component} from 'react';
import './Input.css';

// Components
import Header from '../Header/Header';

class Input extends Component {
  constructor () {
    super()
    this.state = {
      city: '', 
      location: '', 
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  resetInput = () => {
    this.setState({
      city: '', 
      location: ''
    })
  }
  
  render () {

    const {handleInput, resetInput} = this;
    const {city, location} = this.state;
    const {retrieveForecast, resetForecast} = this.props;

    return (
      <div id="Input">
        <Header />
        <section className="UserInput">
          <input onChange={(e) => handleInput(e)} type="text" value={city} name="city" placeholder="City"/>
          <input onChange={(e) => handleInput(e)} type="text" value={location} name="location" placeholder="State"/>
          <section className="Submission">
            <button onClick={() => resetForecast(resetInput)}>Reset</button>
            <button onClick={() => retrieveForecast(city, location)}>Submit</button>
          </section>
        </section>
        <section className="Copyright">
          <small>&copy; Made by Jordan Utz using DarkSky API</small>
        </section>
      </div>
    )
  }
}

export default Input;