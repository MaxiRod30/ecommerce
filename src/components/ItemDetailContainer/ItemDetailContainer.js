import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';

import { useParams } from 'react-router-dom'

import { getProductsId } from '../../services/firebase/firestore/products';
import { useAsync } from '../../hook/useAsync';

const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const {data: product , error , loading} = useAsync(() => getProductsId(itemId), [itemId])

    if(loading){
        return  <div style={{margin:'12em'}} ><Spinner  animation="border" variant="primary" /></div>
    }

    if(error){
        return  <div style={{margin:'12em'}} ><h1>Error {error}</h1></div>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer