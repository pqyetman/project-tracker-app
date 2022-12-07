import { useSelector } from "react-redux";
import IndividualProject from "./IndividualProject";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Projects({ searchData }) {

    const projects = useSelector((state) => state.projects.entities);

    const filteredProjects = projects.filter(project => {
        return project.description.toLowerCase().includes(searchData.toLowerCase())
    })

    const mappedProjects = filteredProjects.map(project => (<IndividualProject project={project} key={project.id} />))

    function sortedItems(event) {

        console.log(event)

    }

    return (
       
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
                {mappedProjects}
            </Table>
       )
}

export default Projects;