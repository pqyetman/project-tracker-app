import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function SignIn({ updateUser }) {

    



    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData

    const history = useHistory()




    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleGuestSignIn = () => {

       history.push(`/r-projects`)

    }



    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch(`/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {                     
                        updateUser(user)
                        history.push(`/r-projects`)
                    })
                } else {
                    res.json().then(json => alert(json.errors))
                }


            })

    }





    return (<>

        <Container fluid style={{height: "100vh"}} className="bg-dark text-white">
            <Row className="d-flex justify-content-center">
                <h1 style={{ textAlign: "center", paddingTop: '20px' }}>Project Tracker</h1>
                <FontAwesomeIcon style={{ paddingTop: '60px', paddingBottom: '20px', paddingRight: '0px' }}
                    icon={faBuilding} size="9x" className="center" bounce />
                <Card style={{ width: '18rem', paddingTop: '15px' }} className="text-center text-black" >
                    <Card.Body>
                        <h3>Login </h3>
                        <Form onSubmit={onSubmit} className="text-center">
                            <Form.Group className="my-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" placeholder="Enter email" onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Please enter a username
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                            </Form.Group>
                            <Button variant="dark" type="submit" >
                                Log In
                            </Button>
                        </Form>
                        <Row className="d-flex justify-content-center">
                            <Button className="mt-2 w-50" onClick={handleGuestSignIn} size="md" variant="secondary" type="submit">
                                Guest Sign In
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Row >
        </Container >
    </>)
}

export default SignIn;