import React from 'react'
import './Daily.css'
import Moment from 'react-moment'

const Daily = (props) => {

  const dayStamp = <Moment unix format="dddd">{props.time}</Moment>
  const monthStamp = <Moment unix format="MMMM Do">{props.time}</Moment>

  return (
    <div id="Daily">
      <section className="TimeStamp">
        <h3>{monthStamp}</h3>
        <h2>{dayStamp}</h2>
      </section>
      <section className="DailyForecast">
        <h4 id="MaxTemp">{Math.round(props.temperatureHigh)}°</h4>
        <h4 id="LowTemp">{Math.round(props.temperatureLow)}°</h4>
      </section>
    </div>
  )
}

export default Daily