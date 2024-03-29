import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'
import ToastAlert from "./ToastAlert"


function Navigation({ setSearchData, updateUser }) {

    const history = useHistory()
    const [searchField, setSearchField] = useState("None")
    const [show, setShow] = useState(false);
    const [toastmessage, setToastmessage] = useState("")


   


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
                setToastmessage("You have successfully signed out of your account")
                setShow(true)
            }

            else {

                setToastmessage("You were not logged in and have been returned to the login screen")
                setShow(true)

            }
           
            history.push("/")
        });



    }




    return (
        <>
        <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="border-bottom border-white">
            <Container fluid style={{ width: "100%" }}>            
                <LinkContainer to="/r-projects">
                    <Navbar.Brand >Projects</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                         <LinkContainer to="/r-customers">
                        <Nav.Link >Customers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/r-employees">
                        <Nav.Link >Employees</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <Row className="d-flex flex-column flex-md-row justify-content-around ">
                        <Col xs={8} md={6} className="my-2 my-md-0">
                            <Form.Group >
                                <Form.Control
                                    onChange={handleSearch}
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"

                                />
                            </Form.Group >
                        </Col>
                        <Col xs={8} md={4} className="my-2 my-md-0">
                            <Form.Group >
                                <Form.Select >
                                    <option>{searchField}</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={8} md={2} className="my-2 my-md-0">
                            <Button onClick={signOut} size="sm" variant="outline-secondary">
                                <FontAwesomeIcon icon={faDoorOpen} size="2x" className="center" />
                            </Button>                           
                        </Col>                      
                    </Row>
                </Navbar.Collapse>
            </Container >
        </Navbar >
        <div style={{ position: 'relative', zIndex: '100'}}>

          <ToastAlert
          className="justify-content-center"
          onClose={()=>setShow(false)} 
          show={show}
          toastmessage={toastmessage}
          
          />
          </div>
          </>
    );
}

export default Navigation;