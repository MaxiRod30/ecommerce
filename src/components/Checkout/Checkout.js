import { collection , query , where , documentId , getDocs , writeBatch, addDoc} from "firebase/firestore"
import { useCart } from '../../context/CartContext'
import './Checkout.css'
import { useState } from "react"
import { db } from "../../services/firebase/firebaseConfig"
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom"
import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {
    const {cart, total, clearCart} = useCart()
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const createOrder = async(userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total 
            }
    
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where( documentId(), 'in' , ids))
            
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
                const orderAdded = await addDoc(ordersRef, objOrder)
                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(()=>{
                    navigate("/")
                },10000)

            }else{
                //TODO: notificacion 






            }

        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }

    }
    
    if(loading){
        return  <div style={{margin:'12em'}} ><Spinner  animation="border" variant="primary" /></div>
    }

    if(orderId){
        return(
            <div>
                <h1>El id de su compra es: {orderId}</h1>
            </div>
        )
    }

    return( 
        <div>
            <h1>Checkout</h1>
            <h2>Ingrese sus datos para la compra</h2>
            <ContactForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout