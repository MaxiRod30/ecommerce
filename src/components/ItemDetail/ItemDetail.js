import './ItemDetail2.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, category, brand,description, price, stock }) => {
    
    const { addItem, isInCart, getProductQuantity } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, description, category, img, stock
        }
        addItem(productToAdd)
        setNotification('success',`Se agrego ${name} al carrito!`,"bottom-right" , 2000)
    }

    const productQuantity = getProductQuantity(id)
    return (

            <div className="product productVista">
                <div className="product__photo">
                    <div className="photo-container">
                        <div className="photo-main">
                            <img src={img} alt={description}></img>
                        </div>
                    </div>
                </div>
                <div className="product__info">
                    <div className="title">
                    <h3>{name}</h3>
                        <span>COD: {id}</span>
                    </div>
                    <div className="price">
                        $ <span>{price}</span>
                    </div>
                    <div className="description">
                        <h4>Caracteristicas</h4>
                        <ul>
                            <p>{brand}</p>
                            <p>{category}</p>
                            <p>{description}</p>
                        </ul>
                    </div>
                    <footer className='ItemFooter'>
                        {
                        (stock !== 0)&&
                            <p className="TitleCantidad">Cantidad</p>
                        }
                        {
                        (stock !== 0)&&
                            (
                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity || 1}/>
                            )
                        }
                        {
                        (isInCart(id) &&( stock !== 0))&&
                            (
                            <Link className='StyleButton m-3 ' to='/cart'>Terminar compra</Link>
                            ) 
                        }
                        {
                        ( stock === 0)&&
                            <h1 className='p-3 mb-2 bg-danger text-white'>Sin Stock</h1>
                        }
                    </footer>
                </div>
            </div> 
        )
    }
    
    export default ItemDetail
    
