import "./CardItems.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function CardItems(props) {
	return (
		<Col className="columna">
			<Card style={{ width: "18rem" }}>
				<Link to={`/PreEntrega2_Aubone/item/${props.id}`}>
					<Card.Img variant="top" src={props.imagen} />
				</Link>
				<Card.Body>
					<Card.Title>{props.nombre}</Card.Title>
					<Card.Text>{props.category}</Card.Text>
					<h6 className="card-price" variant="primary">
						{props.precio}
					</h6>
					<div className="card-button">
						<Link
							className="btn btn-primary btn-lg"
							to={`/PreEntrega2_Aubone/item/${props.id}`}>
							Detalles
						</Link>{" "}
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default CardItems;