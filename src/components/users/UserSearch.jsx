import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';
import AlertContext from '../../contexts/alert/AlertContext';
import { searchUsers } from '../../contexts/github/GithubActions';

function UserSearch() {
    const [text, setText] = useState("");

    const { users, dispatch } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!text) {
            setAlert("enter something!", "error");
        }
        else {
            dispatch({
                type: "SET_LOADING"
            });

            const users = await searchUsers(text);

            dispatch({
                type: "GET_USERS",
                payload: users
            });

            setText("");
        }
    }

    const clearResults = () => {
        dispatch({
            type: "CLEAR_RESULTS"
        })
    }

    return (
        <Container fluid className='mt-5'>
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