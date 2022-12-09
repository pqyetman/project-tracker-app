import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { employeeAdded } from "../employees/employeesSlice";


function NewEmployeeForm({ }) {


    const history = useHistory()
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({

        name: '',
        title: 25,

    })

    const { name, title } = formData

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }


    function onSubmit(e) {
        e.preventDefault()
        console.log(formData)

        const employee = {
            name: name,
            title: title,

        }

        console.log(employee)
        fetch(`/employees`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(employee => {

                        console.log(employee)

                        dispatch(employeeAdded({
                            id: employee.id,
                            ...formData,
                        })

                        )
                    })
                    //  history.push(`/r-projects`)

                } else {
                    res.json().then(json => alert(json.errors))
                }


            })

    }






    return (
        <>
            <Form onSubmit={onSubmit} className="text center">              
                    <Col md={{ span: 6, offset: 3 }} >
                        <Row className="content-center">
                        <Form.Group className="mb-3" >
                            <Form.Label>Employee Name</Form.Label>
                            <Form.Control onChange={handleChange} name="name" placeholder="Enter Employee Name" />
                          
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Employee Title</Form.Label>
                            <Form.Control onChange={handleChange} name="title" placeholder="Enter Employee Title" />
                        </Form.Group>
                        </Row>
                    </Col>             
                <Button style={{ margin: '10px' }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default NewEmployeeForm