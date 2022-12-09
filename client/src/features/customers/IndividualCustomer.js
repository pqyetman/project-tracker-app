import CustomerProjects from "./CustomerProjects";
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function IndividualCustomer({ customer }) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const {projects} = customer;


    return (
        <>
            <tbody>
                <tr>
                    <td>{customer.name}</td>
                    <td>{customer.address}</td>              
                    <td><Button variant="secondary" onClick={handleShow} className="me-2">
                        Details</Button>
                    </td>
                </tr>
            </tbody>
            <CustomerProjects 
            placement="end"
            show={show}
            handleClose={handleClose} 
            projects={projects}  
            customer={customer}       

             />
        </>
    )
}

export default IndividualCustomer;