import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
            <div style={{ display: 'flex'}}>
                {/* key necesaria para que React lo pueda identificar */}
                {products.map(product => <Item key={product.id} {...product}/>)} 
            </div>
    )
}

export default ItemList