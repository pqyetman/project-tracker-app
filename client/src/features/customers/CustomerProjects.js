import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomerNewProjForm from './CustomerNewProjForm';

function CustomerProjects({ name, handleClose, customer, ...props }) {

  const { show, projects } = props



  const closedProjs = projects.filter(project => project.open === false)
  const openProjs = projects.filter(project => project.open === true)

  const mappedClosedProjs = closedProjs.map(project => (<li key={project.id}>{project.description}</li>))
  const mappedOpenProjs = openProjs.map(project => (<li key={project.id}>{project.description}</li>))

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props} className="text-white text-center bg-dark">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title >Customer: {customer.name} </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Col >
            <Row style={{ border: "1px solid" }} className="text-center pt-2">
              <h4>Create a New Project</h4>
              <CustomerNewProjForm customer={customer} />
            </Row>
            <Row className="text-center d-flex justify-content-center pt-2">              

              <h4>Projects</h4>
              <ul style={{ color: "green", listStyle: "none" }}><strong><u>Open Projects</u></strong>
                {mappedOpenProjs}
              </ul>
              <ul style={{ color: "red", listStyle: "none" }}><strong><u>Closed Projects</u></strong>
                {mappedClosedProjs}
              </ul>
            </Row>
          </Col>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomerProjects