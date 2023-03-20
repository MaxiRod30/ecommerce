
import { BsCart } from '../../../node_modules/react-icons/bs';
import Button from '../../../node_modules/react-bootstrap/Button';

const CartWidget = () => {
    return(
        <div >
            <Button variant="light" size="sm"><BsCart /> <p> 0</p></Button>
        </div>
    )
}

export default CartWidget