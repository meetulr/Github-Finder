import { useContext } from "react";
import AlertContext from "../../contexts/alert/AlertContext";

function Alert() {
    const { alert } = useContext(AlertContext);

    return alert !== null && (
        <p className="container-fluid place-alert fs-6 mb-0">
            {alert.type === "error" && (
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 50 50" xmlSpace="preserve" width="1rem" height="1rem" className="me-2">
                    <circle style={{ fill: "#D75A4A" }} cx="25" cy="25" r="25" />
                    <polyline style={{ fill: "none", stroke: "#FFFFFF", strokeWidth: "2", strokeLinecap: "round", strokeMiterlimit: "10" }} points="16,34 25,25 34,16" />
                    <polyline style={{ fill: "none", stroke: "#FFFFFF", strokeWidth: "2", strokeLinecap: "round", strokeMiterlimit: "10" }} points="16,16 25,25 34,34" />
                </svg>
            )}
            <strong className="mb-0">{alert.msg}</strong>
        </p>
    )
}

export default Alert