import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';

import { getProducts } from '../../services/firebase/firestore/products';
import { useAsync } from '../../hook/useAsync';

const ItemListContainer = ({ greeting }) => {
    
    const {brandId} = useParams()

    const {data: products , error , loading} = useAsync(()=>getProducts(brandId), [brandId])


    if(loading){
        return  <div style={{margin:'12em'}} ><Spinner  animation="border" variant="primary" /></div>
    }
    if(error){
        return  <div style={{margin:'12em'}} ><h1>Error {error}</h1></div>
    }

    return (
        <div >
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer