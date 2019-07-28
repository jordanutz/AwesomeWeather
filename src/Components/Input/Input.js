import React, {Component} from 'react'
import './Input.css'

// Components
import Header from '../Header/Header'

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
    return (
      <div id="Input">
        <Header />
        <section className="UserInput">
          <input onChange={(e) => this.handleInput(e)} type="text" value={this.state.city} name="city" placeholder="City"/>
          <input onChange={(e) => this.handleInput(e)} type="text" value={this.state.location} name="location" placeholder="State"/>
          <section className="Submission">
            <button onClick={() => this.props.resetForecast(this.resetInput)}>Reset</button>
            <button onClick={() => this.props.retrieveForecast(this.state.city, this.state.location)}>Submit</button>
          </section>
          {this.props.findError ? this.props.errorMessage : null}
        </section>
      </div>
    )
  }
}

export default Input