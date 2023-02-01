import Button from 'react-bootstrap/Button';
import { tasksDeleted } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";
import {projectsUpdated} from "./projectsSlice"

function TasksTable({ task, project }) {

    const dispatch = useDispatch();

    const { description = [], hours = [], employee = {}, id } = task;

    function handleDelete() {
        console.log(id)
        fetch(`/tasks/${id}`, {
            method: 'DELETE'
        }).then(res => {
                if (res.ok) {
                   console.log("Task Deleted")
                   dispatch(tasksDeleted(id))

                   
                   dispatch(projectsUpdated(
                    {id: project.id,
                    total: project.total - task.hours,
                    open: project.open,}))
                    }

                 else {
                    res.json().then(json => alert(json.errors))
                }


            })

          
    }


    return (<>
        <tr onClick ={console.log(task)}>
            <td >{description}</td>
            <td>{hours}</td>
            <td>{employee.name}</td>
            <td>{employee.title}</td>
            <td style={{ textAlign: "center" }} >
                <Button
                    onClick={handleDelete}
                    size="sm"
                    variant="outline-danger">
                    x
                </Button ></td>
        </tr>
    </>)

}

export default TasksTable; 