import "./ItemListContainer.css"

function ItemListContainer({greeting}){
    return(
        <div className="mensajeBienvenida">
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer