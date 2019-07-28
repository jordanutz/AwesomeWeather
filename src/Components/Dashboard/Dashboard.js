import React from 'react'
import './Dashboard.css'

// Components
import Daily from '../Daily/Daily'

const Dashboard = (props) => {

  const displayForecast = props.weather && 
    props.weather.map( (single, index) => {
      console.log(single)
      return (
        <Daily key={index} {...single} />
      )
    })

  return (
    <section id="Dashboard">
      <h1>{props.city && props.state ? props.city + ', ' + props.state : null}</h1>
      <h2 className="CurrentWeather">{props.current && Math.round(props.current) + '°'}</h2>
      {displayForecast}
    </section>
  )
}

export default Dashboard