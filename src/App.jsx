import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import DetailedCard from "./components/CardItems/DetailedCardContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route
					main
					path="/preEntrega2_Aubone/"
					element={<ItemListContainer />}
				/>
				<Route
					path="/preEntrega2_Aubone/item/:id"
					element={<DetailedCard />}
				/>
				<Route
					path="/preEntrega2_Aubone/category/:idCategory"
					element={<ItemListContainer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App
