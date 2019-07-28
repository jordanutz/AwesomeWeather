import React from 'react';
import './Dashboard.css';

// Components
import Daily from '../Daily/Daily';

const Dashboard = (props) => {

  const {weather, city, state, current} = props;

  const displayForecast = weather && 
    weather.map( (single, index) => {
      // console.log(single)
      return (
        <Daily key={index} {...single} />
      )
    })

  return (
    <section id="Dashboard">
      <section className="DashboardBlock">
        <h1>{city && state ? city + ', ' + state : null}</h1>
        <h2 className="CurrentWeather">{current && Math.round(current) + '°'}</h2>
      </section>
      {displayForecast}
    </section>
  )
}

export default Dashboard;