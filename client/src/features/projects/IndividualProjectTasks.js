import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import NewTaskForm from './NewTaskForm';
import Accordion from 'react-bootstrap/Accordion';
import TasksTable from './TasksTable';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Card from 'react-bootstrap/Card';

function IndividualProjectTasks(props) {

    const { project, task } = props

    const { customer_name, description, id } = project

    let mappedTasks = task.map(task => <TasksTable key={task.id} task={task} project={project}/>)


    //Custome Button for Accordian

    function ContextAwareToggle({ children, eventKey, callback }) {


        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );



        return (
            <button className="rounded-pill"
                type="button"
                style={{ backgroundColor: 'white',
                color: "black" }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }


    return (
        <Modal className="text-white"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // scrollable={true}
        >
            <Modal.Header closeVariant='white' closeButton className="bg-dark text-white">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4> Project: {description} </h4>
                    <h4> Customer: {customer_name} </h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
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
            <Modal.Footer className="bg-dark text-white justify-content-start">
                <Accordion defaultActiveKey="1" className="bg-dark text-white border-0 w-100">
                    <Card className="bg-dark text-white border-0">
                        <Card.Header>
                            <ContextAwareToggle eventKey="0">Click to Enter A Task</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body> 
                                <NewTaskForm id={id} project={project}/>
                                </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>            
            </Modal.Footer>
        </Modal>

    );

}

export default IndividualProjectTasks;