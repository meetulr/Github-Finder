import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../contexts/github/GithubContext";

function UserResults() {
    const {users, loading} = useContext(GithubContext);

    if (!loading) {
        return (
            <Container fluid className="mt-5">
                <Row>
                    {users.map((user) => (
                        <Col key={user.id} xs={12} md={6} lg={4}>
                            <UserItem key={user.id} user={user}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    } else {
        return <Spinner />
    }
}

export default UserResults