import React from 'react'
import './Deatail.css';
import dataJson from '../weather.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun ,faMoon } from '@fortawesome/free-regular-svg-icons';
function Detail() {
  return (
    <div className='container detailWeather'>
      {dataJson.map((getData)=>
      {
        return( <div className="strip1" key={'+'}>
        <h4><strong>{getData.query.results.channel.item.title}</strong></h4>
        </div>)
      })}
     
      <div className="container rowDetail"><div class="row">
        {dataJson.map((getData)=>
        {
          return(<div className="col" key={'^'}>
      <h2 className='degree'>{getData.query.results.channel.item.condition.temp}<span>&deg;</span></h2>
      <h5>Feel Like</h5>
    </div>)
        })}
    
    {dataJson.map((getData)=>
    {
      return(<div className="col flexIt">
    <FontAwesomeIcon icon={faSun} size="15px" />
    <p><strong>{getData.query.results.channel.astronomy.sunrise}</strong></p>
    <FontAwesomeIcon icon={faMoon} size="20px" />
    <p><strong>{getData.query.results.channel.astronomy.sunset}</strong></p>
    </div>)
    })}
  </div>
      </div>
      <div class="container">
  <div class="row">
    {dataJson.map((getData)=>
    {
      return( <> <div class="col temperature">
      <div className="tempe"> 
      <p><strong> <span>&#xf769;</span>High/Low</strong></p>
      </div>
      <div className="rature">
        <p><strong>{getData.query.results.channel.item.forecast[0].high} <span>&deg;</span>/
        {getData.query.results.channel.item.forecast[0].low} <span>&deg;</span></strong></p>
      </div>
    </div>
    <div class="col humadity">
      <div className="huma"> 
      <p><strong>Humadity</strong></p>
      </div>
      <div className="dity">
        <p><strong>{getData.query.results.channel.atmosphere.humidity}<span>%</span></strong></p>
      </div>
    </div>
   <div class="w-100"></div>
    <div class="col wind">
      <div className="wi"> 
      <p><strong>Wind</strong></p>
      </div>
      <div className="nd">
        <p><strong><span>&#x27A2;</span> {getData.query.results.channel.wind.speed} <span>km/h</span></strong></p>
      </div>
    </div>
    <div class="col dewPoint">
      <div className="dew"> 
      <p><strong>Dew Point</strong></p>
      </div>
      <div className="point">
        <p><strong>14<span>&deg;</span></strong></p>
      </div>
    </div></>)
    })}
  </div>
  <div class="row">
    {dataJson.map((getData)=>
    {
      return(<> <div class="col pressure">
      <div className="pre"> 
      <p><strong>Pressure</strong></p>
      </div>
      <div className="sure">
        <p><strong><span>&#x2193;</span> {getData.query.results.channel.atmosphere.pressure} <span>mb</span></strong></p>
      </div>
    </div>
    <div class="col uvIndex">
      <div className="uv"> 
      <p><strong>UV Index</strong></p>
      </div>
      <div className="index">
        <p><strong>0 of 10</strong></p>
      </div>
    </div>
    <div class="w-100"></div>
    <div class="col visibility">
      <div className="vis"> 
      <p><strong>Visibility</strong></p>
      </div>
      <div className="bility">
        <p><strong>{getData.query.results.channel.atmosphere.visibility}</strong></p>
      </div>
    </div>
    <div class="col moonPhase">
      <div className="moon"> 
      <p><strong>Moon Phase</strong></p>
      </div>
      <div className="phase">
        <p><strong>Waning Gibbous</strong></p>
      </div>
      </div>
    </>
)})}
  </div>
</div>
 </div>
  )
}

export default Detail