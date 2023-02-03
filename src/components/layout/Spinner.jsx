import spinner from "./assets/spinner.gif";

function Spinner() {
    return (
        <div className="text-center">
            <img
                src={spinner}
                width={250}
                alt="Loading..." />
        </div>
    )
}

export default Spinner;