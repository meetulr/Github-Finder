import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function RepoList({repos}) {
  return (
    <>
        <div className="fs-4 fw-bold mb-4">
            Latest Repositories
        </div>
        {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo}/>
        ))}
    </>
  )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList