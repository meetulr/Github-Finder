import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar2({ title }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid className="justify-content-between">
                <div>
                    <Navbar.Brand className="d-flex align-items-center">
                        <FaGithub className="fs-3 d-inline" />
                        <Nav.Link as={Link} to="/" className="ps-3 fs-5 fw-bold text-white text-decoration-none">
                            {title}
                        </Nav.Link>
                    </Navbar.Brand>
                </div>

                <div>
                    <Nav>
                        <Nav.Link as={Link} to="/" className="px-2 py-1 btn btn-outline-secondary me-1">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="px-2 py-1 btn btn-outline-secondary me-1">About</Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}

Navbar2.defaultProps = {
    title: "Github Finder"
}

Navbar2.prototypes = {
    title: Proptypes.string
}

export default Navbar2