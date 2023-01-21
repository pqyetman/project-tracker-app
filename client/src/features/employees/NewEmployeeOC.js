
import Offcanvas from 'react-bootstrap/Offcanvas';
import NewEmployeeForm from './NewEmployeeForm';
import Row from 'react-bootstrap/Row';

function NewEmployeeOC({ handleclose, show }) {




  return (
    <>

      <Offcanvas className="bg-dark text-white"onHide={handleclose} show={show} >
        <Offcanvas.Header closeButton closeVariant="white">    
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="my-2 text-center text-white bg-dark">
            <h3>Create New Employee</h3>
            <NewEmployeeForm />
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NewEmployeeOC