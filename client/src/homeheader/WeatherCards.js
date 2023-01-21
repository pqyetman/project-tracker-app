import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import {
    TiWeatherCloudy, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindyCloudy,
    TiWeatherDownpour, TiWeatherPartlySunny
} from "react-icons/ti";

function WeatherCards({ day }) {

    const { date, temp2m, wind10m_max, weather } = day;

    //temp correction to Fahrenheight

    const fahrenheightWeatherMin = ((temp2m.min) * 9 / 5) + 32
    const fahrenheightWeatherMax = ((temp2m.max) * 9 / 5) + 32

    //date correction
    function reOrderDate(date) {

        let dateStr = date.toString()
        const dateFirst = dateStr.slice(0, 4);
        const dateMiddle = dateStr.slice(4, 6);
        const dateLast = dateStr.slice(6, 8);
        let fixedDate = `Date:  ${dateMiddle}/${dateLast}/${dateFirst}`

        return fixedDate
    }

    const reverseDate = reOrderDate(date)

    //windspeed

    function interpretWindAPI(wind10m_max) {

        let output = ''

        switch (wind10m_max) {

            case 1:
                output = 'Calm Breeze';
                break;

            case 2:
                output = 'Light Breeze';
                break;

            case 3:
                output = 'Moderate Breeze';
                break;

            case 4:
                output = 'Fresh Beeze';
                break;

            case 5:
                output = 'Strong Winds';
                break;

            case 6:
                output = 'Gale Force Winds';
                break;

            case 7:
                output = 'Stormy Winds';
                break;
            case 8:
                output = 'Here I am...rock you like a hurricane';
                break;
            default:
                output = "No Data";

        }
        return output

    }

    const windTranslation = interpretWindAPI(wind10m_max)



    function filterWeather(weather) {

        let output = ""

        switch (weather) {
            case "clear":
                output = < TiWeatherSunny size={150} />;
                break;
            case "cloudy":
                output = < TiWeatherCloudy size={150} />;
                break;
            case "mcloudy":
                output = < TiWeatherWindyCloudy size={150} />;
                break;
            case "rain":
                output = <TiWeatherShower size={150} />;
                break;
            case "lightrain":
                output = <TiWeatherShower size={150} />;
                break;
            case "snow":
                output = <TiWeatherSnow size={150} />;
                break;
            case "ts":
                output = <TiWeatherStormy size={150} />;
                break;
            case "tsrain":
                output = <TiWeatherDownpour size={150} />;
                break;
            default:
                output = <TiWeatherPartlySunny size={150} />
        }
        return output;
    }


    const displayPicture = filterWeather(weather)


    //verbal output
    function filterWeatherString(weather) {

        let output = ""

        switch (weather) {
            case "clear":
                output = "Total cloud cover less than 20%";
                break;
            case "cloudy":
                output = "Total cloud cover between 20%-80%";
                break;
            case "mcloudy":
                output = "Total cloud cover over over 80%";
                break;
            case "rain":
                output = "Rain with total cloud cover over 80%";
                break;
            case "lightrain":
                output = "Rain with total cloud cover less than 80%";
                break;
            case "snow":
                output = "Snow with total cloud cover over 80%";
                break;
            case "ts":
                output = "Lifted Index less than -5";
                break;
            case "tsrain":
                output = "Lifted Index less than -5 with rain";
                break;
            default:
                output = `${weather}`;
        }
        return output;
    }


    const displayString = filterWeatherString(weather)


    return (

   
            <Card style={{ width: '18rem' }} className="text-center bg-dark text-white border-white">
                <Row className="text-center">
                {displayPicture}
                </Row>
                <Card.Body>
                    <Card.Title>{reverseDate}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush border-white ">
                    <ListGroup.Item className="text-center border-white bg-dark text-white">Conditions: {displayString}</ListGroup.Item>
                    <ListGroup.Item className="text-center border-white bg-dark text-white">Max Temp: {fahrenheightWeatherMax}</ListGroup.Item>
                    <ListGroup.Item className="text-center border-white bg-dark text-white">Min Temp: {fahrenheightWeatherMin}</ListGroup.Item>
                    <ListGroup.Item className="text-center border-white bg-dark text-white">Wind Description: {windTranslation}</ListGroup.Item>
                </ListGroup>
            </Card>
     

    );
}

export default WeatherCards;