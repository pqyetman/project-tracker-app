import Carousel from 'react-bootstrap/Carousel';
import WeatherCards from "./WeatherCards"
import Row from 'react-bootstrap/Row';
import { v4 as uuid } from "uuid";


function HomeCarousel({  weather }) {




  //Get longitude and lattitude from browser
  const threeDayWeather = weather.map((day => (<WeatherCards key={uuid()} day={day} />))).slice(0, 3)
  const sixDayWeather = weather.map((day => (<WeatherCards key={uuid()} day={day} />))).slice(3, 6)
  const singleDayWeather = weather.map((day => (<Carousel.Item  key={uuid()} interval={5000} ><Row className="d-flex justify-content-center my-3"><WeatherCards key={uuid()} day={day} /></Row></Carousel.Item>)))

 



  return (

    <>
      <div className="d-none d-xl-block" >
        <Carousel className="bg-secondary border-top border-bottom border-white" indicators={false} controls={false} >
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
        <Carousel className="bg-secondary border-top border-bottom border-white " controls={false} indicators={false}>
          {singleDayWeather}
        </Carousel>
      </div >
    </>
  );
}

export default HomeCarousel;