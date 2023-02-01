import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import IndividualProjectTasks from './IndividualProjectTasks';
import { useDispatch } from "react-redux";
import { fetchTasks } from "../tasks/tasksSlice";
import {projectsUpdated} from "./projectsSlice"
import { useSelector } from "react-redux";
import {MdOutlineDoneAll, MdFolderOpen} from "react-icons/md";



function IndividualProject({project}) {
    const task = useSelector((state) => state.tasks.entities)

    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
  //  const [task, setTask] = useState([])

    const {total, customer_name, description, open, id, estimated_total_hours} = project


    let now = parseInt((total/estimated_total_hours)*100) 

    function retrieveTasks () {

    /*   fetch(`/projects/${id}/tasks`)
        .then((response) => response.json())
        .then((data) => setTask(data)); */
    
       dispatch(fetchTasks(id))
       console.log(task)
        setModalShow(true)
    }

    function changeProjectStatus(){

        fetch(`/projects/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                open: !open,
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(project => {
                        console.log(project)
                        dispatch(projectsUpdated(
                            {id: project.id,
                            total: project.total,
                            open: project.open,}))
                      
                    })
              
                } else {
                    res.json().then(json => alert(json.errors))
                }

                
            })  
      


    }


    return (       
        <>
        <tbody>
          <tr >
            <td onClick = {retrieveTasks}>{description}</td>
            <td>{customer_name}</td>
            <td>{estimated_total_hours}</td>
            <td>{open ? <ProgressBar now={now} animated variant="info" label={`${now}%`} /> : "Project Closed"}</td>
            <td><button onClick = {changeProjectStatus}>{open ? <MdOutlineDoneAll/> : <MdFolderOpen/>}</button></td>
          </tr>
          </tbody>
          <IndividualProjectTasks
          onHide={() => setModalShow(false)}
          show={modalShow}
          project={project}
          task={task}
          />
          </>
       
     
    );
  }
  
  export default IndividualProject;