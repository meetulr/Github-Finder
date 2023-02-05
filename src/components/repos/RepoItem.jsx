import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';
import PropTypes from "prop-types";

function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

    return (
        <div className='mb-2 repo-card rounded'>
            <div className='px-4 py-3 mb-2'>
                <div className='d-flex fs-5 mb-2 align-items-center'>
                    <a href={html_url} className="remove-link-decoration">
                        <FaLink />
                    </a>
                    <p className='ms-3 fw-bold mb-0'>{name}</p>
                </div>
                <p className='fs-6 mb-3'>{description}</p>

                <h6 className='fs-6'>
                    <span className='badge rounded-pill bg-info me-2 badge-small'>
                        <div className='d-flex align-items-center mx-2 my-1'>
                            <FaEye className='me-1 fs-6' />
                            <p className='fs-6 mb-0'>{watchers_count}</p>
                        </div>
                    </span>
                    <span className='badge rounded-pill bg-success me-2 badge-small'>
                        <div className='d-flex align-items-center mx-2 my-1'>
                            <FaStar className='me-1 fs-6' />
                            <p className='fs-6 mb-0'>{stargazers_count}</p>
                        </div>
                    </span>
                    <span className='badge rounded-pill bg-danger me-2 badge-small'>
                        <div className='d-flex align-items-center mx-2 my-1'>
                            <FaInfo className='me-0 fs-6' />
                            <p className='fs-6 mb-0'>{open_issues}</p>
                        </div>
                    </span>
                    <span className='badge rounded-pill bg-warning me-2 badge-small'>
                        <div className='d-flex align-items-center mx-2 my-1'>
                            <FaUtensils className='me-1 fs-6' />
                            <p className='fs-6 mb-0'>{forks}</p>
                        </div>
                    </span>
                </h6>
            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem