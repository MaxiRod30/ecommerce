
import { BsCart } from '../../../node_modules/react-icons/bs';
import './CardWidget.css'

const CartWidget = () => {
    return(
        <div className ='btnCarrito'>
            <BsCart className='nav-link'></BsCart> <p className='btnTextCarrito'>0</p>
        </div>
    )
}

export default CartWidget