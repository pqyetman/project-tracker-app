import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import IndividualCustomer from "./IndividualCustomer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Customers({searchData}) {

    const customers = useSelector((state) => state.customers.entities);
    const customerStatus = useSelector((state) => state.customers.status);

    const filteredCustomers = customers.filter(customer => {
        return customer.name.toLowerCase().includes(searchData.toLowerCase())
      })
    const mappedCustomers = filteredCustomers.map(customer => (<IndividualCustomer customer={customer} key={customer.id} />))

   
    return (
        <>
        
            <Table className="px-0" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Address</th>                       
                        <th>Projects</th>
                    </tr>
                </thead>
                {mappedCustomers}
            </Table>
            {customerStatus === "loading" ? <Row className="justify-content-center" > <FontAwesomeIcon style={{ padding: '50px', color: "white" }} icon={faBuilding} size="9x" className="center" bounce /> </Row>: ""}
        
        </>

    )
}

export default Customers;