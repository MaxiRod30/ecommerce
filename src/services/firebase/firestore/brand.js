import { collection, getDocs, query , orderBy} from 'firebase/firestore'
import { db } from "../firebaseConfig"
import { createAdaptedBrand } from '../../../components/adapters/createAdapterBrand'


export const getBrand = () => {

    const brandRef = query(collection(db , "brand"), orderBy('order','asc'))

    return getDocs(brandRef)
        .then(snapshop =>{
            const brandAdapted = snapshop.docs.map(doc =>{
                return createAdaptedBrand(doc)
            })
            return(brandAdapted)
        })
        .catch(error=>{
            return(error)
        })
}