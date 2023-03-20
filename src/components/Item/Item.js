
const Item = ({ name, img, price , stock , brand}) => {
    return (
        <div style={{ background: 'green', margin: 10}}>
            <h3>{name}</h3>
            <img src={"/asset/"+ brand +"/"+ img} alt={name} style={{width: 100}}/>
            <p>Precio: ${price}</p>
        </div>
    )
}

export default Item