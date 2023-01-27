import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

function Navbar({ title }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-12">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <FaGithub className="fs-2 d-inline mr-2" />
                    <Link to="/" className="ps-3 fs-4 fw-bold text-white text-decoration-none">
                        {title}
                    </Link>
                </div>

                <div>
                    <ul className="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link to="/" className="fs-5 fw-bold nav-link">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/about" className="fs-5 fw-bold nav-link">About</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Github Finder"
}

Navbar.prototypes = {
    title: Proptypes.string
}

export default Navbar