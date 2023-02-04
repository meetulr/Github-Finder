import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';

function UserSearch() {
    const [text, setText] = useState("");

    const { users , searchUsers, clearResults } = useContext(GithubContext);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("enter something first you idiot");
        }
        else {
            searchUsers(text);
            setText("");
        }
    }

    return (
        <Container className='mt-5'>
            <Row>
                <Col xs={10} md={7} lg={5}>
                    <Form onSubmit={handleSubmit}>
                        <div className="position-relative">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={text}
                                onChange={handleChange}
                            />
                            <Button variant="dark" type="submit" className="left-flat position-absolute end-0 top-0">
                                Go
                            </Button>
                        </div>
                    </Form>
                </Col>
                {users.length > 0 && (
                    <Col xs={3} md={2} lg={2}>
                        <Button variant="outline-secondary" 
                                className="btn-md py-1"
                                onClick={clearResults}
                                >
                            Clear
                        </Button>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default UserSearch