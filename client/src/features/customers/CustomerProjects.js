import Offcanvas from 'react-bootstrap/Offcanvas';

function CustomerProjects({ name, ...props }) {

const {show, setShow, projects} = props

  const handleClose = () => setShow(false);

    const closedProjs = projects.filter(project => project.open === false)
    const openProjs = projects.filter(project => project.open === true)

    const mappedClosedProjs = closedProjs.map(project => (<li key={project.id}>{project.description}</li>))
    const mappedOpenProjs = openProjs.map(project => (<li key={project.id}>{project.description}</li>))

  return (
    <>  
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Projects</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul><strong>Closed Projects</strong>
            {mappedClosedProjs} 
          </ul>
          <ul><strong>Open Projects</strong>
            {mappedOpenProjs}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomerProjects