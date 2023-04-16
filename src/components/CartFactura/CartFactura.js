import { useCart } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import "./CartFactura.css"

const CartFactura = () => {
    const { total, totalQuantity, clearCart } = useCart()
   
    return (
        <>
        <div className="line"></div>
        <div className="p-3 mb-2 bg-light rounded w-100 text-dark border border-info d-flex justify-content-center row sombra">
            <aside className="col-sm-4">
                <h2 className="text-start">Factura</h2>
                <p className="text-start fs-3"> Cantidad de articulos: {totalQuantity}</p>
                <p className="text-center fs-3"> Total: ${total}</p>
                <div className="d-flex justify-content-center column">
                    <Link className='btn btn-outline-info btn-lg w-100 m-3' to='/checkout'>Checkout</Link>
                    <button onClick={()=>clearCart()} className="btn btn-outline-danger btn-lg w-100 m-3">Vaciar compra</button>
                </div>
            </aside>
        </div>
        <div className="line"></div>
        </>
    )
}

export default CartFactura