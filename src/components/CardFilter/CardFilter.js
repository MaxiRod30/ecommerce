import "./CardFilter.css"
import { Link } from 'react-router-dom'

const CartFilter = () => {
    return(
        
            <div className="filterMenu">
                <div className="filter_logo"></div>
                <h3>Filtro por marca: </h3>
                <div className="filter_items">
                    <Link to={"/brand/DL"} className="filter_items" >DL</Link>
                    <Link to={"/brand/Adidas"} className="filter_items" >Adidas</Link>
                    <Link to={"/brand/Nike"} className="filter_items" >Nike</Link>
                    <Link to={"/brand/Puma"} className="filter_items" >Puma</Link>
                </div>
            </div>
        
    )
}

export default CartFilter