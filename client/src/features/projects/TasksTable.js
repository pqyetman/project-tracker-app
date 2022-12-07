import Button from 'react-bootstrap/Button';
import { tasksDeleted } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";

function TasksTable({ task }) {

    const dispatch = useDispatch();

    const { description = [], hours = [], employee = {}, id } = task;

    function handleDelete() {
        console.log(id)
        fetch(`/tasks/${id}`, {
            method: 'DELETE'
        }).then(res => {
                if (res.ok) {
                   console.log("Task Deleted")
                    }

                 else {
                    res.json().then(json => alert(json.errors))
                }


            })

            dispatch(tasksDeleted(id))
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