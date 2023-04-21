import "./Item.css"

import { useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price , stock , brand}) => {
   
    const navigate = useNavigate()

    const handleLink = (id)=>{
        navigate(`/item/${id}`)
    }
    
    return (
            <div  className="item" onClick={()=> handleLink(id)}>
                <div className="favorite">
                    <i>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path></svg>
                    </i>
                </div>
                <img className="item_img" src={img} alt={"Descripción "+img}></img>
                <div className="line"></div>
                <div className="conteinerText">
                    <p className="textName"><font>{name}</font></p>
                    <p className="textPrice"><font >${price}</font></p>
                </div>
            </div>
            )
}

export default Item

