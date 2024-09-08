import ShoppingCartIcon from "../../assets/cart.png"

function CartWidget(){
    return(
        <div className="carrito">
            <img className="logoCarrito" src={ShoppingCartIcon} alt="Logo carrito" />
            <span className="cantidad">3</span>
        </div>
    )
}

export default CartWidget