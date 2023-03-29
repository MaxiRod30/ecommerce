import "./Item.css"
import { Link } from 'react-router-dom'
  
const Item = ({ id, name, img, price , stock , brand}) => {
    return (
                    <div  className="item">
                        <div className="favorite">
                            <i>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path></svg>
                            </i>
                        </div>
                        <a href={"/asset/"+brand+"/"+img}>
                            <img className="item_img" src={"/asset/"+brand+"/"+img} alt={"Descripción "+img}></img>
                        </a>
                        <div className="line"></div>
                        <div className="conteinerText">
                            <p className="textName"><font>{name}</font></p>
                            <p className="textPrice"><font >${price}</font></p>
                            
                        </div>
                        <div className="btnClass">
                            <Link to={`/item/${id}`} className='btnDetalles'>Detalles</Link>
                    </div>
                </div>

    )
}

export default Item

