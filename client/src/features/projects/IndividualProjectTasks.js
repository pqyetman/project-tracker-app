import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import NewTaskForm from './NewTaskForm';
import Accordion from 'react-bootstrap/Accordion';
import TasksTable from './TasksTable';

function IndividualProjectTasks(props) {

    const {project, task}=props

    const {customer, description, id} = project

    let mappedTasks = task.map(task => <TasksTable key={task.id} task={task}/>)



    return (
        <Modal 
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
           // style={{ color: '#ccc' }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   <h4> Project: {description} </h4>
                   <h4> Customer: {customer.name} </h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover size="sm" variant="dark">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Hours</th>
                            <th>Employee Name</th>
                            <th>Employee Title</th>
                            <th style={{ textAlign: "center" }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {mappedTasks}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Click To Add A Task</Accordion.Header>
                    <Accordion.Body>
                        <NewTaskForm id={id}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Modal>
    );

}

export default IndividualProjectTasks;