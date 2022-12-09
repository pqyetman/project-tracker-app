import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {IoAccessibilitySharp } from "react-icons/io5";

function IndividualEmployee({ employee }) {

  const { name, title } = employee;
  const randColor = Math.floor(Math.random()*16777215).toString(16)

  return (
    <Col>
      <Card>
        <IoAccessibilitySharp style={{color: `#${randColor}`}} size={150}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Card.Text>
            Title: {title}
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default IndividualEmployee; 