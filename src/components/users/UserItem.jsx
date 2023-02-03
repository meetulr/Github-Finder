import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
    return (
        <Card style={{ backgroundColor: "transparent", border: "0px", boxShadow: "10px 10px 10px #333" }} className="mb-2">
            <div className="d-flex align-items-center">
                <div>
                    <Card.Img variant="top"
                        className="m-2"
                        src={avatar_url}
                        style={{ width: "4.5rem", height: "4.5rem", borderRadius: "50%" }} />
                </div>

                <div>
                    <Card.Body>
                        <div className="mt-2 d-flex flex-column">
                            <Card.Title className="fw-bold fs-5">{login}</Card.Title>
                            <Card.Link as={Link} to={`/users${login}`}
                                                className="text-decoration-none text-white fs-6" 
                                                style={{ opacity: 0.4 }}
                                                >Card Link</Card.Link>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem