import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

function SignIn({updateUser}) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    
    const history = useHistory()

    const { username, password } = formData



    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
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

        <Container fluid>
            <Row className="justify-content-center">
                <h1 style={{ textAlign: "center", padding: '20px' }}>Project Tracker</h1>
                <FontAwesomeIcon style={{ padding: '50px' }} icon={faBuilding} size="9x" className="center" bounce />
                <Card style={{ width: '18rem', padding: '25px' }}>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                        <h3 style={{ textAlign: "center",}}>Login</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" placeholder="Enter email" onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Please enter a domain specific username
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                            </Form.Group>
                            <Button style={{ margin: '10px'}} variant="primary" type="submit">
                                Submit
                            </Button>                           
                        </Form>
                        <Button onClick = {()=> history.push(`/r-projects`) } style={{ margin: '10px'}} size="sm" variant="secondary" type="submit">
                                Guest Sign In
                            </Button>
                    </Card.Body>
                </Card>
            </Row >
        </Container >
    </>)
}

export default SignIn;