import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from 'react';
import WeatherCards from "./WeatherCards"
import Row from 'react-bootstrap/Row';
import { v4 as uuid } from "uuid";
import Container from 'react-bootstrap/Container';

function HomeCarousel({ lat, lng, status, weather }) {




  //Get longitude and lattitude from browser
  const threeDayWeather = weather.map((day => (<WeatherCards key={uuid()} day={day} />))).slice(0, 3)
  const sixDayWeather = weather.map((day => (<WeatherCards key={uuid()} day={day} />))).slice(3, 6)

  useEffect(() => {

    console.log("Side Render")
    console.log(weather)


  }, []);





  return (
    <Carousel>         
        <Carousel.Item interval={5000}>       
          <Row xs={1} md={3} className="g-4" style={{ justifyContent: "center", justifyText: "center", display: "flex"}}>
            {threeDayWeather}
          </Row>
        </Carousel.Item>     
        <Carousel.Item interval={5000}>
          <Row xs={1} md={3} className="g-4" style={{ justifyContent: "center" }}>
            {sixDayWeather}
          </Row>
        </Carousel.Item>
   
    </Carousel>
  );
}

export default HomeCarousel;