import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <div className="text-center">
                <h1 className="display-1">Oops</h1>
                <p className="display-3 mb-5">404 - page not found!</p>
                <Link to="/" className="btn btn-primary btn-lg">
                    <div className="d-flex align-items-center">
                        <FaHome className="me-2" />
                        Back to Home
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NotFound