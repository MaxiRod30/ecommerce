import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts ,getProductsByBrand } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {brandId} = useParams()

    useEffect(() => {

        const asyncFuction = brandId ? getProductsByBrand : getProducts
        
        asyncFuction(brandId)
            .then(products => {
                setProducts(products)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [brandId])

    return (
        <div >
            
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer