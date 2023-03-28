import Item from "../Item/Item"
import CardFilter from "../CardFilter/CardFilter.js"
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
            <div className="itemList">
                    {/* key necesaria para que React lo pueda identificar */}
                    <div className="filterCard">
                        <CardFilter />
                    </div>
                    <div className="listItems">
                        {products.map(product => <div key={product.id} className="itemL"><Item  {...product}/></div>)}
                        
                    </div>
            </div>
            )
}
export default ItemList