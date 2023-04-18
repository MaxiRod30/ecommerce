import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts ,getProductsByBrand } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';

import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {brandId} = useParams()

    
    useEffect(() => {
        setLoading(true)

        const productsRef = brandId
        ? query(collection( db, 'products'),where('brand','==', brandId))
        : collection( db, 'products')
        

        getDocs(productsRef)
            .then(snapshop =>{
                const productsAdapted = snapshop.docs.map(doc =>{
                    const data = doc.data()
                    return{ id: doc.id , ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })

        // const asyncFuction = brandId ? getProductsByBrand : getProducts
        
        // asyncFuction(brandId)
        //     .then(products => {
        //         setProducts(products)
        //     })
        //     .catch(error =>{
        //         console.log(error)
        //     })
        //     .finally(()=>{
        //         setLoading(false)
        //     })
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