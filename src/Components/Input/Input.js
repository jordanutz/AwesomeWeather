import React, {Component} from 'react'
import './Input.css'

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

  render () {
    return (
      <section id="UserInput">
        <label>City</label>
        <input onChange={(e) => this.handleInput(e)} type="text" value={this.state.city} name="city"/>
        <label>State</label>
        <input onChange={(e) => this.handleInput(e)} type="text" value={this.state.location} name="location"/>
        <button onClick={() => this.props.retrieveForecast(this.state.city, this.state.location)}>Submit</button>
        {this.props.findError ? this.props.errorMessage : null}
      </section>
    )
  }
}

export default Input