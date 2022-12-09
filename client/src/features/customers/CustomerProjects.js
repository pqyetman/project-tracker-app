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
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title ><h3>{customer.name}</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Col >
            <Row className="content-center">

              <h4>Exisiting Projects</h4>
              <ul style={{color: "red", paddingLeft: "40px"}}><strong>Closed Projects</strong>
                {mappedClosedProjs}
              </ul>
              <ul style={{color: "green", paddingLeft: "40px"}}><strong>Open Projects</strong>
                {mappedOpenProjs}
              </ul>
            </Row>
            <Row style={{border: "1px solid"}}  className="content-center">
              <h4>Create a New Project</h4>
              <CustomerNewProjForm customer={customer} />
            </Row>
          </Col>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomerProjects