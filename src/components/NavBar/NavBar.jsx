import "./NavBar.css"
import logo from "../../assets/logo.jpg"
import CartWidget from "../CartWidget/CartWidget"
import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link to={"/PreEntrega2_Aubone/"}>
                    <img className="logo" src={logo} alt="Logo tienda" />
                </Link>
                <ul className="navbar-links">
                    <Link to={"/PreEntrega2_Aubone/"} className="navbar-item">
                        Todos los Productos
                    </Link>
                    <Link to={"/PreEntrega2_Aubone/category/Perros"} className="navbar-item">
                        Perros
                    </Link>
                    <Link to={"/PreEntrega2_Aubone/category/Gatos"} className="navbar-item">
                        Gatos
                    </Link>
                </ul>
                <CartWidget/>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar