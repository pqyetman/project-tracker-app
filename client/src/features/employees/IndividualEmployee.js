import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { IoAccessibilitySharp } from "react-icons/io5";

function IndividualEmployee({ employee }) {

  const { name, title } = employee;
  const randColor = Math.floor(Math.random() * 16777215).toString(16)

  return (
    <Col>
      <Card className="text-center justify-content-center bg-secondary"> 
        <Card.Body>
          <IoAccessibilitySharp style={{ color: `#${randColor}` }} size={150} />
        </Card.Body>
        <Card.Footer>
          <Card.Text>
            Name: {name}
          </Card.Text>
          <Card.Text>
            Title: {title}
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default IndividualEmployee; 