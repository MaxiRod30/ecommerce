import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts ,getProductsByBrand } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

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
            .finally(()=>{
                setLoading(false)
            })
    }, [brandId])

    if(loading){
        return  <div style={{margin:'12em'}} ><Spinner  animation="border" variant="primary" /></div>
    }
    
    return (
        <div >
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer