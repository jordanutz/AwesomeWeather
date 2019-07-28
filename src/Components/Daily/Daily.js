import React from 'react'
import './Daily.css'
import Moment from 'react-moment'

const Daily = (props) => {

  const dayStamp = <Moment unix format="dddd" style={{color: '#fff', fontSize: '1.25em', fontWeight: '200'}}>{props.time}</Moment>
  const monthStamp = <Moment unix format="MMMM Do" style={{color: '#fff', fontSize: '1.5em', fontWeight: '200'}}>{props.time}</Moment>

  return (
    <div id="Daily">
      <section className="TimeStamp">
        <h3>{monthStamp}</h3>
        <h2>{dayStamp}</h2>
      </section>
      <section className="DailyForecast">
        <h4>{Math.round(props.temperatureHigh)}° | {Math.round(props.temperatureLow)}°</h4>
      </section>
    </div>
  )
}

export default Daily