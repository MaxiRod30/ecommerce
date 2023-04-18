import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        const productRef = doc(db, 'products', itemId )

        getDoc(productRef)
            .then(snapshot =>{
                const data = snapshot.data()
                const productsAdapted = {id: snapshot.id, ...data}
                console.log(productsAdapted)
                setProduct(productsAdapted)
            })
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })

        // getProductById(itemId)
        // .then(response => {
        //     setProduct(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(()=>{
        //         setLoading(false)
        //     })
    }, [itemId])

    if(loading){
        return  <div style={{margin:'12em'}} ><Spinner  animation="border" variant="primary" /></div>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer