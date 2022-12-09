import { useSelector } from "react-redux";
import IndividualProject from "./IndividualProject";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";
import Row from 'react-bootstrap/Row';

function Projects({ searchData }) {

    const projects = useSelector((state) => state.projects.entities);
    const projectsStatus = useSelector((state) => state.projects.status);

    const filteredProjects = projects.filter(project => {
        return project.description.toLowerCase().includes(searchData.toLowerCase())
    })

    const mappedProjects = filteredProjects.map(project => (<IndividualProject project={project} key={project.id} />))

    function sortedItems(event) {

        console.log(event)

    }

    useEffect(() => {

        console.log(projectsStatus)
        console.log("Project Render")

    }, []);

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Project Description
                            <Button onClick={sortedItems}
                                style={{ float: "right" }}
                                size="sm"
                                variant="outline-secondary">▲</Button>
                            <Button
                                style={{ float: "right" }}
                                size="sm"
                                variant="outline-secondary">▼</Button>
                        </th>
                        <th>Customer</th>
                        <th>Estimated Total Hours</th>
                        <th>Project Status</th>
                        <th>Close/Open</th>
                    </tr>
                </thead>
                 { mappedProjects }
            </Table>
            {projectsStatus === "loading" ? <Row className="justify-content-center" > <FontAwesomeIcon style={{ padding: '50px' }} icon={faBuilding} size="9x" className="center" bounce /> </Row>: ""}
        </>)
}

export default Projects;