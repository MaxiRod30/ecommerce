import "./Item.css"

import { useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price , stock , brand}) => {
   
    const navigate = useNavigate()

    const handleLink = (id)=>{
        navigate(`/item/${id}`)
    }
    
    return (
            <div  className="item" onClick={()=> handleLink(id)}>
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

