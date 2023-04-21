import { collection , query , where , documentId , getDocs , writeBatch, addDoc} from "firebase/firestore"
import { db } from "../firebaseConfig" 


export const getOrder = async(cart , objOrder) =>{
        
        const ids = cart.map(prod => prod.id)
        const productsRef = query(collection(db, 'products'), where( documentId(), 'in' , ids))
        let orderAdded = ""
        const { docs } = await getDocs(productsRef)

        const batch = writeBatch(db)
        const outOfStock = []

        docs.forEach(doc =>{
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            }else{
                outOfStock.push({id:doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length ===  0){
            batch.commit()
            const ordersRef = collection(db,'orders')
            orderAdded = await addDoc(ordersRef, objOrder)
        }
            return { orderAdded, outOfStock}
        
}