import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import {filterWeatherString, dateConversion, windSpeed, filterWeather, tempConversion} from './WeatherDataFunctions';


function WeatherCards({ day }) {

    const { date, temp2m, wind10m_max, weather,  } = day;

    //temp correction to Fahrenheight

   
   

   

    return (

   
            <Card style={{ width: '18rem' }} className="text-center bg-dark text-white border-white">
                <Row className="text-center">
                {filterWeather(weather+"day")}
                </Row>
                <Card.Body>
                    <Card.Title>{dateConversion(date)}</Card.Title>
                  
                </Card.Body>
                <ListGroup className="list-group-flush border-white ">
                    <ListGroup.Item className="text-center border-white bg-dark text-white">Conditions: {filterWeatherString(weather+"day")}</ListGroup.Item>
                    <ListGroup.Item className="text-center border-white bg-dark text-white">Max Temp: {tempConversion(temp2m.max)}&#8457;</ListGroup.Item>
                    <ListGroup.Item className="text-center border-white bg-dark text-white">Min Temp: {tempConversion(temp2m.min)}&#8457;</ListGroup.Item>
                    <ListGroup.Item className="text-center border-white bg-dark text-white">Wind Description: {windSpeed(wind10m_max)}</ListGroup.Item>
                </ListGroup>
            </Card>
     

    );
}

export default WeatherCards;