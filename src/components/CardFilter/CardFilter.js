import "./CardFilter.css"
import { NavLink } from 'react-router-dom'

const CartFilter = () => {
    return(
        
            <div className="filterMenu">
                <div className="filter_logo"></div>
                <h5>Filtro por marca: </h5>
                <div className="filter_items">
                    <NavLink to={"/brand/DL"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >DL</NavLink>
                    <NavLink to={"/brand/Adidas"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Adidas</NavLink>
                    <NavLink to={"/brand/Nike"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Nike</NavLink>
                    <NavLink to={"/brand/Puma"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Puma</NavLink>
                </div>
            </div>
        
    )
}

export default CartFilter