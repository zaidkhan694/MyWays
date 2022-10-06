import React from 'react'
import './Weather.css';
import WeatherData from '../weather.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon , faSun } from '@fortawesome/free-regular-svg-icons';
function Weather() {
  return (
    <>
    <div className='container blockWeather my-3'>
      {WeatherData.map((resData)=>
      {
        return( <div className="firstStrip" key={'#'}>
              <h5><strong>{resData.query.results.channel.location.city},{resData.query.results.channel.location.region},{resData.query.results.channel.location.country}</strong> as of 04:37 EDT</h5>
              </div>)
      })}
        <div className="weatherDetail">
          {WeatherData.map((getData)=>
          {
            return( <div className="numbers" key={'$'}>
                <h1>{getData.query.results.channel.item.condition.temp}<span>&deg;</span></h1>
                <p>{getData.query.results.channel.item.condition.text}</p>
                <p><strong>Day {getData.query.results.channel.item.forecast[0].high}<span>&deg;</span> . Night{getData.query.results.channel.item.forecast[0].low}<span>&deg;</span></strong></p>
            </div>)
          })}
           
            <div className="icon ">
              <FontAwesomeIcon icon={faMoon} size ="10x" />
            </div>
        </div>
    </div>
    <div className="container my-2 wholeDay">
      <div className="container txt">
        <h4><strong>Todays Forecast For New York City ,NY , United States</strong></h4>
      </div>
      <div className="container my-5">
  <div className="row">
    <div className="d-flex flex-column justify-content-center text-center col-sm ">
      <h3>Morning</h3>
      <h3 className='temp'>25<span>&deg;</span></h3>
      <FontAwesomeIcon icon={faSun} size="2x" />
      <h3><strong>0%</strong></h3>
    </div>
    <div className="verticalLine">
    </div>
    <div class="d-flex flex-column justify-content-center text-center border-right col-sm">
      <h3>Afternoon</h3>
      <h3 className='temp'>30<span>&deg;</span></h3>
      <FontAwesomeIcon icon={faSun} size="2x" />
      <h3><strong>5%</strong></h3>
    </div>
    <div className="verticalLine">
    </div>
    <div className="d-flex flex-column justify-content-center text-center col-sm">
    <h3>Evening</h3>
      <h3 className='temp'>25<span>&deg;</span></h3>
      <FontAwesomeIcon icon={faMoon} size="2x" />
      <h3><strong>0%</strong></h3>
    </div>
    <div className="verticalLine">
    </div>
    <div className="d-flex flex-column justify-content-center text-center col-sm">
    <h3>Overnight</h3>
      <h3 className='temp'>20<span>&deg;</span></h3>
      <FontAwesomeIcon icon={faMoon} size="2x" />
      <h3><strong>--</strong></h3>
    </div>
  </div>
</div> 
<div className=" btn btn-success"><strong>Next Hours</strong></div>
    </div>
 
    </>
  )
}

export default Weather