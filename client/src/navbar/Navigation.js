import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

function Navigation({ setSearchData, currentUser, setPage, updateUser }) {

    const history = useHistory()
    const [searchField, setSearchField] = useState("None")


    function handleSearch(e) {
        console.log(e.target.value)
        setSearchData(e.target.value)

        switch (window.location.pathname) {
            case "/r-projects":
                setSearchField("Project Description")
                break;
            case "/r-customers":
                setSearchField("Customer Name")
                break;
            case "/r-employees":
                setSearchField("Employee Name")
                break;
            default:
                setSearchField("None")
        }

    }


    function signOut() {

        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                updateUser(null);
            }
            setPage("/")
            history.push("/")
        });
        
    

    }

    


    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="/r-projects">Projects</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/r-customers">Customers</Nav.Link>
                        <Nav.Link href="/r-employees">Employees</Nav.Link>                    
                    </Nav>                  
                    <Form.Group className="d-flex">
                        <Form.Control style={{ margin: "0px 20px 0px 3px" }}
                            onChange={handleSearch}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form.Group>
                    <Form.Group className="d-flex" style={{ color: "white" }}>
                        <Form.Label style={{ margin: "0px 20px 0px 3px" }}>Search Field</Form.Label>
                        <Form.Select size="sm" disabled style={{ margin: "0px 20px 0px 3px" }}>
                            <option>{searchField}</option>
                        </Form.Select>
                    </Form.Group>
                    <Button onClick={signOut} size="sm" variant="secondary">Sign Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;