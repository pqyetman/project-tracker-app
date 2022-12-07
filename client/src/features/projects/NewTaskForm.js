import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector } from "react-redux";
import { taskAdded } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";

function NewTaskForm ({id}) {

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.entities);

    
    const hoursArray = [1, 2, 3, 4, 5, 6, 7, 8]
    const hoursSelect = hoursArray.map(hour => (<option key={hour} value={hour} >{hour}</option>))

  
    const employeeSelect = employees.map(emp => (<option key={emp.id} value={emp.id} >{emp.name}</option>))

    
    const initialTask = {
         hours: 1,
         description: '',
         employee_id: 1,
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
        console.log(formData)
        const task = {
            hours,
            description,
            employee_id,
            project_id    
            
        }
        console.log(task)
        fetch(`/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(task => {
                     
                       console.log(task)

                        const employeeTitle = employees.find(employee => employee.id === task.employee_id ).title
                                            
                                                       

                        const employeeName = employees.find(employee => employee.id === task.employee_id ).name                                     
                                                        
                        console.log(employeeName)
                        console.log(employeeTitle)

                       dispatch(taskAdded({
                        ...formData,
                        id: task.id,
                        employee:{
                            name:  employeeName,
                            title: employeeTitle,
                        }, 
                        
                      }))
                      
                    })
                setFormData(initialTask)
                } else {
                    res.json().then(json => alert(json.errors))
                }

                
            })
      
        

    }  

    return (
        <>
                   <Form onSubmit = {onSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control onChange = {handleChange} name="description" placeholder="Enter Task Description" />
                                <Form.Text className="text-muted">
                                    Please enter a task done for this project
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Hours</Form.Label>
                                <Form.Select onChange = {handleChange} name="hours" size="sm">
                                    {hoursSelect}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Employee</Form.Label>
                                <Form.Select name="employee_id" onChange = {handleChange} size="sm">
                                    {employeeSelect}
                                </Form.Select>
                            </Form.Group>
                            <Button style={{ margin: '10px' }} variant="primary" type="submit">
                                Add Task
                            </Button>
                        </Form></>
    );

}

export default NewTaskForm;