import { Col, Row, Button } from 'react-bootstrap';
import { useEffect, useContext } from "react";
import { FaCodepen, FaStore, FaUsers } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import RepoList from '../components/repos/RepoList';
import GithubContext from "../contexts/github/GithubContext";
import { getUserAndRepos } from '../contexts/github/GithubActions';

function User() {
    const { user, repos, loading, dispatch } = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
        dispatch({
            type: "SET_LOADING"
        });

        const getUserData = async () => {
            const userData = await getUserAndRepos(params.login);

            dispatch({
                type: "GET_USER_AND_REPOS",
                payload: userData
            });
        }

        getUserData();
    }, [dispatch, params.login])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='container my-3'>
            <div className='text-center mb-3 mx-auto'>
                <Link to='/'>
                    <Button variant='outline-light' className='rborder'>Back To Search</Button>
                </Link>
            </div>
            <div className='mb-0'>
                <Row>
                    <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 0 }} lg={4} xl={3} className="mb-3">
                        <div className="position-relative">
                            <figure>
                                <img src={avatar_url} alt="" className='img-fluid rounded fade-img' />
                            </figure>

                            <div className='place-login'>
                                <p className="fs-5">{login}</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={8} className="mt-1">
                        <div className='mb-1'>
                            <h1 className='fw-bold mb-3 fs-4'>
                                {name}
                                <div className='badge bg-success font-small ms-3 me-1'>{type}</div>
                                {hireable && (
                                    <div className='mx-1 badge bg-info font-small'>Hireable</div>
                                )}
                            </h1>
                            <div>
                                <a
                                    href={html_url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='btn btn-outline-light btn-sm mb-2'
                                >
                                    Visit Github Profile
                                </a>
                                <p className='fs-6'>{bio}</p>
                            </div>
                        </div>

                        <div>
                            <Row>
                                {location && (
                                    <Col lg={4} className="info-card">
                                        <div className='fs-6 fw-light mt-2'>Location</div>
                                        <div className='fs-6 fw-bold mb-2'>{location}</div>
                                    </Col>
                                )}
                                {blog && (
                                    <Col md={6} lg={4} className="info-card">
                                        <div className='fs-6 fw-light mt-2'>Website</div>
                                        <div className='fs-6 fw-bold mb-2'>
                                            <a
                                                href={`https://${blog}`}
                                                target='_blank'
                                                rel='noreferrer'
                                                className='remove-link-decoration'
                                            >
                                                {blog}
                                            </a>
                                        </div>
                                    </Col>
                                )}

                                {twitter_username && (
                                    <Col md={6} lg={4} className="info-card">
                                        <div className='fs-6 fw-light mt-2'>Twitter</div>
                                        <div className='fs-6 fw-bold mb-2'>
                                            <a
                                                href={`https://twitter.com/${twitter_username}`}
                                                target='_blank'
                                                rel='noreferrer'
                                                className='remove-link-decoration'
                                            >
                                                {twitter_username}
                                            </a>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='mb-5'>
                <Row>
                    <Col xs={6} md={3} className='info-card d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='fs-6 fw-light mt-2'>Followers</div>
                            <div className='fs-6 fw-bold mb-2'>{followers}</div>
                        </div>
                        <FaUsers />
                    </Col>

                    <Col xs={6} md={3} className='info-card d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='fs-6 fw-light mt-2'>Following</div>
                            <div className='fs-6 fw-bold mb-2'>{following}</div>
                        </div>
                        <FaUsers />
                    </Col>

                    <Col xs={6} md={3} className='info-card d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='fs-6 fw-light mt-2'>Public Repos</div>
                            <div className='fs-6 fw-bold mb-2'>{public_repos}</div>
                        </div>
                        <FaCodepen />
                    </Col>

                    <Col xs={6} md={3} className='info-card d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='fs-6 fw-light mt-2'>Public Gists</div>
                            <div className='fs-6 fw-bold mb-2'>{public_gists}</div>
                        </div>
                        <FaStore />
                    </Col>
                </Row>
            </div>

            <Row>
                <Col lg={{span:10, offset:1}}>
                    <RepoList repos={repos} />
                </Col>
            </Row>
        </div >
    )
}

export default User;