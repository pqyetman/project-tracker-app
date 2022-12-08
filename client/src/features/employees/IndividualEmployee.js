import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function IndividualEmployee({employee}) {

    const {name, title} = employee;

    return (
      <Col>
      <Card >
        <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/riVjTppDToD88VCvcKJS9ie-ngQ=/0x0:1600x1213/1920x0/filters:focal(0x0:1600x1213):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13890680/Try_Watching_Office_Space_Online.jpg" />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
          Title: {title}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>Create Task</Button>
        </Card.Footer>
      </Card>
      </Col>
    );
  }

export default IndividualEmployee; 