import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import IndividualCustomer from "./IndividualCustomer"



function Customers({searchData}) {

    const customers = useSelector((state) => state.customers.entities);

    const filteredCustomers = customers.filter(customer => {
        return customer.name.toLowerCase().includes(searchData.toLowerCase())
      })
    const mappedCustomers = filteredCustomers.map(customer => (<IndividualCustomer customer={customer} key={customer.id} />))

    console.log(customers)
    return (
        <>
           
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Address</th>                       
                        <th>Projects</th>
                    </tr>
                </thead>
                {mappedCustomers}
            </Table>
        </>

    )
}

export default Customers;