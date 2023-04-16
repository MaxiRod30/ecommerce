
import { BsCart } from '../../../node_modules/react-icons/bs';
import './CardWidget.css'
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <div className ='btnCarrito'>
            <BsCart className='nav-link'></BsCart> <p className='btnTextCarrito'>{totalQuantity}</p>
        </div>
    )
}

export default CartWidget