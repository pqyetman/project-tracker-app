
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import IndEmp from './IndividualEmployee'
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import NewEmployeeOC from "./NewEmployeeOC"


function Employees({ searchData }) {

    const [modalShow, setModalShow] = useState(false);
    const employees = useSelector((state) => state.employees.entities);
    const handleShow = () => setModalShow(true);
    const handleClose = () => setModalShow(false)

    const filteredEmployees = employees.filter(employee => {
        return employee.name.toLowerCase().includes(searchData.toLowerCase())
    })

    let empMap = filteredEmployees.map(employee => <IndEmp key={employee.id} employee={employee} />)

    return (
        <>
            <Container fluid flex="true" style={{height: "100%"}} className="text-white bg-dark">
                <Row className="col-xs-12 center-block text-center text-white bg-dark pt-3 mb-3 ">
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} className="d-flex justify-content-center">
                            <h2>||<u>Active Employees </u>||</h2>                         
                        </Col>
                        <span className="ms-2"><Button variant="outline-secondary" onClick={handleShow} className="me-2 rounded-end-circle"
                            >Create Employee</Button>
                            </span>
                        <NewEmployeeOC show={modalShow} handleclose={handleClose} />
                    </Row>
                </Row>
                <Row xs={2} md={5} className="g-4 text-center bg-dark pb-5">
                    {empMap}
                </Row>
                {filteredEmployees.length <= 0 ? <h2 className="text-center text-white">No Employees Match Search Input</h2>:""}
            </Container>
        </>

    )
}

export default Employees;