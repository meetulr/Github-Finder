import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
    return (
        <Card className="mb-3 user-card">
            <div className="d-flex align-items-center">
                <div>
                    <Card.Img variant="top"
                        className="m-2 user-img"
                        src={avatar_url}
                        />
                </div>

                <div>
                    <Card.Body>
                        <div className="mt-2 d-flex flex-column">
                            <Card.Title className="fw-bold fs-5">{login}</Card.Title>
                            <Card.Link as={Link} to={`/user/${login}`}
                                                className="text-decoration-none text-white fs-6" 
                                                style={{ opacity: 0.4 }}
                                                >Visit Profile</Card.Link>
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