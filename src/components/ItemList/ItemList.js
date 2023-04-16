import Item from "../Item/Item"
import CardFilter from "../CardFilter/CardFilter.js"
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
            <div className="itemList">
                    <CardFilter />
                    
                    <div className="listItems">
                        {products.map(product => <div key={product.id} className="itemL"><Item  {...product}/></div>)}
                        
                    </div>
            </div>
            )
}
export default ItemList