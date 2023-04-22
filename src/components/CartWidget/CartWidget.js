
import { BsCart2 } from '../../../node_modules/react-icons/bs';
import './CardWidget.css'
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <div className ='btnCarrito'>
            <BsCart2 className='nav-link mb-1'></BsCart2> <p className='btnTextCarrito'>{totalQuantity}</p>
        </div>
    )
}

export default CartWidget