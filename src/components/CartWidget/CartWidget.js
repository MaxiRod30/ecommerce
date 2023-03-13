
import { BsCart } from '../../../node_modules/react-icons/bs';
import Button from '../../../node_modules/react-bootstrap/Button';

const CartWidget = () => {
    return(
        <div >
            <Button variant="light" size="sm"><BsCart /> <spam> 0</spam></Button>
        </div>
    )
}

export default CartWidget