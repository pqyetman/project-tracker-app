
import { useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import IndEmp from './IndividualEmployee'
import Container from 'react-bootstrap/Container';
import NewEmployeeForm from './NewEmployeeForm';


function Employees({ searchData }) {

    const employees = useSelector((state) => state.employees.entities);

    const filteredEmployees = employees.filter(employee => {
        return employee.name.toLowerCase().includes(searchData.toLowerCase())
    })

    let empMap = filteredEmployees.map(employee => <IndEmp key={employee.id} employee={employee} />)

    return (
        <>
            <Container flex="true">
            <Row style={{border: "1px solid"}} className="col-xs-12 center-block text-center">
                <h2>Create New Employee</h2>
                <NewEmployeeForm/>
                </Row>
                <Row className="col-xs-12 center-block text-center">
                <h2>Active Employees</h2>
                </Row>
                <Row xs={1} md={4} className="g-4">
                    {empMap}
                </Row>
            </Container>
        </>

    )
}

export default Employees;