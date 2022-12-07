import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import WeatherCards from "./WeatherCards"


function HomeCarousel({lat, lng, status, weatherData}) {

 
 
  //Get longitude and lattitude from browser
// const threeDayWeather = weatherData.map((day => (<WeatherCards  key = {day.dataseries} day = {day}/>))).slice(0, 3)

  useEffect(() => {

   // console.log(`weather data : ${weatherData}`)



  }, []);





  return (
    <Carousel variant="dark">
      <Carousel.Item>
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/gxwgulxyxxy1/1yHwVStIyAeC2CuwwwswUG/5641c0cce01346747a3735c8a53c6a65/00.jpg?fm=jpg&fl=progressive&w=1024&h=429&fit=fill&q=100"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>{status}</h5>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s7d2.scene7.com/is/image/TWCNews/heavy_rain_jpg-6"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>{status}</h5>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;