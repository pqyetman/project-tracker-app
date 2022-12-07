import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import {TiWeatherCloudy, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindyCloudy,
    TiWeatherWindy , TiWeatherDownpour, TiWeatherNight, TiWeatherPartlySunny } from "react-icons/ti";

function WeatherCards({day}) {

    return (
        <Row xs={1} md={3} className="g-4">
            <Card style={{ width: '18rem' }}>
                <TiWeatherCloudy size={150} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Date: {}</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>               
            </Card>
        </Row >
    );
}

export default WeatherCards;