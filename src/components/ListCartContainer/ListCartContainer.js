import { useCart } from "../../context/CartContext"
import Cart from "../Cart/Cart"
import CartFactura from "../CartFactura/CartFactura"

const ListCartConteiner = () => {
    const { cart , removeItem } = useCart()

    return (
        
            <div className="container mt-5 mb-5 ">
                {cart.map(product => <div key={product.id} className="d-flex justify-content-center row mt-3"><Cart  {...product} onRemove={removeItem}/></div>)}
                {
                    cart.length === 0 ?(
                        <h1>No hay productos en el carrito</h1>
                    ) : (
                        <CartFactura />
                    )
                }             
            </div>
    )
}

export default ListCartConteiner