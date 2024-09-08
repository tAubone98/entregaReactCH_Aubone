import "./NavBar.css"
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <img className="logo" src={logo} alt="Logo tienda" />
            </div>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="#">INICIO</a>
                </li>
                <li className="navbar-item">
                    <a href="#">COMPONENTES</a>
                </li>
                <li className="navbar-item">
                    <a href="#">PRE-ENSAMBLADOS</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar