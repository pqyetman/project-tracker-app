import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector } from "react-redux";
import { projectsUpdated } from "../projects/projectsSlice";
import { taskAdded } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";
import Row from 'react-bootstrap/Row';

function NewTaskForm({ id, project }) {

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.entities);
    
 


    const hoursArray = [1, 2, 3, 4, 5, 6, 7, 8]
    const hoursSelect = hoursArray.map(hour => (<option key={hour} value={hour} >{hour}</option>))


    const employeeSelect = employees.map(emp => (<option key={emp.id} value={emp.id} >{emp.name}</option>))


    const initialTask = {
        hours: 1,
        description: '',
        employee_id: employees[0].id,
        project_id: `${id}`
    }



    const [formData, setFormData] = useState(initialTask)

    const { hours, description, employee_id, project_id } = formData

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })


    }



    function onSubmit(e) {

        e.preventDefault()
          
        
        const task = {
            hours,
            description,
            employee_id,
            project_id

        }

   
        fetch(`/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(task => {

                      

                        const employeeTitle = employees.find(employee => employee.id === task.employee_id).title

                        const employeeName = employees.find(employee => employee.id === task.employee_id).name

                     

                        dispatch(taskAdded({
                            ...formData,
                            id: task.id,
                            employee: {
                                name: employeeName,
                                title: employeeTitle,
                            },

                        }))

                        dispatch(projectsUpdated(
                            {id: project.id,
                            total: project.total + task.hours,
                            open: project.open,}))
                      
                 

                    })

                    setFormData(initialTask)}
                 else {
                    res.json().then(json => alert(json.errors))
                    setFormData(initialTask)
                    }

            })

    }

    return (
        <>
            <Row  className="d-flex justify-content-center px-4">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={handleChange} name="description" placeholder="ex. Report Review" />
                        <Form.Text className="text-muted">
                            Please enter a task done for this project
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Hours</Form.Label>
                        <Form.Select onChange={handleChange} name="hours" size="sm">
                            {hoursSelect}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Employee</Form.Label>
                        <Form.Select name="employee_id" onChange={handleChange} size="sm">
                            {employeeSelect}
                        </Form.Select>
                    </Form.Group>
                    <Button style={{ margin: '10px' }} variant="secondary" type="submit">
                        Add Task
                    </Button>
                </Form>
            </Row>
            </>
    );

}

export default NewTaskForm;