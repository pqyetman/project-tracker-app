import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { customersUpdated } from "../customers/customersSlice";

function CustomerNewProjForm({ customer }) {

    const hoursArray = [25, 50, 75, 100, 125, 150, 175, 200]
    const hoursSelect = hoursArray.map(hour => (<option key={hour} value={hour} >{hour}</option>))

    const history = useHistory()
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        open: true,
        description: '',
        estimated_total_hours: 25,
        customer_id: customer.id,
    })

    const { estimated_total_hours, description } = formData

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }


    function onSubmit(e) {
        e.preventDefault()
        console.log(formData)

        const project = {
            open: true,
            description,
            estimated_total_hours,
            customer_id: customer.id

        }
        console.log(project)
        fetch(`/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(project => {

                        console.log(project)

                        dispatch(customersUpdated({                           
                            id: customer.id,
                            projects: [...customer.projects,
                                {
                                id: project.id,
                                description: project.description ,
                                open: true,
                                customer_id: customer.id,
                                estimated_total_hours: project.estimated_total_hours,
                            }], })
                            
                          )})
                      //  history.push(`/r-projects`)
                    
                } else {
                    res.json().then(json => alert(json.errors))
                }


            })

    }






    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control onChange={handleChange} name="description" placeholder="Enter Task Description" />
                    <Form.Text className="text-muted">
                        Please enter a task done for this project
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Estimated Total Hours</Form.Label>
                    <Form.Select onChange={handleChange} name="estimated_total_hours" size="sm">
                        {hoursSelect}
                    </Form.Select>
                </Form.Group>
                <Button style={{ margin: '10px' }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default CustomerNewProjForm