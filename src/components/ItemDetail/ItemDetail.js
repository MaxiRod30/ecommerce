import './ItemDetail2.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import {Link} from 'react-router-dom'

const ItemDetail = ({ id, name, img, category, brand,description, price, stock }) => {
    
    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, description, category, img:"/asset/"+brand+"/"+img, stock
        }
        addItem(productToAdd)
    }

    return (

            <div className="product productVista">
                <div className="product__photo">
                    <div className="photo-container">
                        <div className="photo-main">
                            <img src={"/asset/"+brand+"/"+img} alt={description}></img>
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
                        <p className="TitleCantidad">Cantidad</p>
                        {
                            isInCart(id) ? (
                                <Link className='StyleButton' to='/cartCarrito'>Terminar compra</Link>
                            ) : (
                                <ItemCount onAdd={handleOnAdd} stock={stock} />
                            )
                        }
                    </footer>
                </div>
            </div> 
        )
    }
    
    export default ItemDetail
    
