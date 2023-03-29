import "./ItemSomosNosotros.css"

import {Link} from 'react-router-dom'

const ItemSomosNosotros = () => {
    return(
        <div className="fondo position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center  text-danger">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">RopMaX</h1>
            <p className="lead fw-normal">Bienvenidos a La Tienda RopMaX, encontrara articulos,camistas, pantalos, etc.</p>
            <Link to="/" className="btn btn-secondary" >Ver productos</Link>
            </div>
        </div>
      
    )
}

export default ItemSomosNosotros