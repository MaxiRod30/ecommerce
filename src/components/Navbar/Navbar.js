
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { BsSearchHeart } from '../../../node_modules/react-icons/bs';
import { GiBattleAxe } from '../../../node_modules/react-icons/gi';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
            <div className="wrapper">

            </div>
            <div className="container-fluid all-show">
                <Link to='/' className="navbar-brand" >RopMaX <GiBattleAxe/></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/sobreNosotros" className="nav-link active" aria-current="page">¿Quienes somos?</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productos" className="nav-link" >Productos</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/eventos" className="nav-link" >Eventos</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contactenos" className="nav-link" >Contactenos</NavLink>
                        </li>

                        <li className="nav-item">
                           
                            {/* <NavLink to="/search" className="nav-link" ><BsSearchHeart size={22} /></NavLink> */}
                        </li>
                    </ul>
                    <div className="d-flex flex-column sim navbar-carrito">
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar