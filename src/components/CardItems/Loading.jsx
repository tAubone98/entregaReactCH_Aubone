import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";

function Loading() {
	return (
		<Spinner className="loading-spinner" animation="grow" variant="primary"/>
	);
}

export default Loading;