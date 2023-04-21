import { collection, getDocs, query, where , getDoc, doc } from 'firebase/firestore'
import { db } from "../firebaseConfig"
import { createAdaptedFirestore } from '../../../components/adapters/createAdaptedFirestore'

export const getProducts = (brandId) => {

    const productsRef = brandId
    ? query(collection( db, 'products'),where('brand','==', brandId))
    : collection( db, 'products')
    

    return getDocs(productsRef)
        .then(snapshop =>{
            const productsAdapted = snapshop.docs.map(doc =>{
                return createAdaptedFirestore(doc)
            })
            return(productsAdapted)
        })
        .catch(error=>{
            return error
        })

}

export const getProductsId = (itemId) => {

    const productRef = doc(db, 'products', itemId )

    return getDoc(productRef)
        .then(snapshot =>{
            return(createAdaptedFirestore(snapshot))
        })
        .catch(error=>{
            return error
        })

}


