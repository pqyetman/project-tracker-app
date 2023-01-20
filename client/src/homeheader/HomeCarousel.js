import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from 'react';
import WeatherCards from "./WeatherCards"
import Row from 'react-bootstrap/Row';

import { v4 as uuid } from "uuid";


function HomeCarousel({ lat, lng, status, weather }) {




  //Get longitude and lattitude from browser
  const threeDayWeather = weather.map((day => (<WeatherCards key={uuid()} day={day} />))).slice(0, 3)
  const sixDayWeather = weather.map((day => (<WeatherCards key={uuid()} day={day} />))).slice(3, 6)
  const singleDayWeather = weather.map((day => (<Carousel.Item  interval={5000} ><Row className="d-flex justify-content-center my-3"><WeatherCards key={uuid()} day={day} /></Row></Carousel.Item>)))

  useEffect(() => {

    console.log("Carousel Render")
    console.log(weather)
    
  }, []);





  return (

    <>
      <div className="d-none d-xl-block" >
        <Carousel className="bg-secondary border-top border-bottom border-white" indicators={false}>
          <Carousel.Item interval={5000} >
            <Row className="d-flex justify-content-evenly my-4">
              {threeDayWeather}
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000} >
            <Row xs={3} className="d-flex justify-content-evenly my-4">
              {sixDayWeather}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-xl-none justify-content-center">
        <Carousel className="bg-secondary border-top border-bottom border-white " indicators={false}>
          {singleDayWeather}
        </Carousel>
      </div >
    </>
  );
}

export default HomeCarousel;