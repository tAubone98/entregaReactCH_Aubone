import "./ItemListContainer.css";
import CardItems from "../CardItems/CardItems";
import products from "../Products/products";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [data, SetData] = useState([]);
	let { idCategory } = useParams();

	useEffect(() => {
		if (idCategory === undefined) {
			FetchSimulation(products, 2000)
				.then((response) => SetData(response))
				.catch((error) => console.log(error));
		} else {
			FetchSimulation(
				products.filter((filter) => filter.category == idCategory)
			)
				.then((response) => SetData(response))
				.catch((error) => console.log(error));
		}
	}, [idCategory]);

	return (
		<>
			<Container className="cards-container">
				{data.map((products) => (
					<CardItems
						key={products.id}
						id={products.id}
						imagen={products.imagen}
						nombre={products.titulo}
						category={products.category}
						precio={products.precio}
					/>
				))}
			</Container>
		</>
	);
};

const FetchSimulation = (dataBase, time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(dataBase);
			reject(new Error("Algo salió mal, lo sentimos."));
		}, time);
	});
};

export default ItemListContainer;