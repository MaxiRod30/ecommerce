import Item from "../Item/Item"

import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
            <div className="itemList">
                    {/* key necesaria para que React lo pueda identificar */}
                    {products.map(product => <div className="itemL"><Item key={product.id} {...product}/></div>)}
            </div>
            )
}
export default ItemList