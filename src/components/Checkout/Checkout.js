import { useCart } from '../../context/CartContext'
import './Checkout.css'
import { useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom"
import ContactForm from "../ContactForm/ContactForm"
import { getOrder } from "../../services/firebase/firestore/orders"
import { useNotification } from '../../notification/NotificationService'

const Checkout = () => {
    const {cart, total, clearCart} = useCart()
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {setNotification} = useNotification()

    const createOrder = async(userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total 
            }
    
            const {orderAdded , outOfStock} = await getOrder(cart, objOrder)  
            if(orderAdded){
                clearCart()
                setOrderId(orderAdded.id)
                setNotification("success",`Se realizo la compra con exito, ID: ${orderAdded.id}`,"bottom-right",10000)
                setTimeout(()=>{
                    navigate("/")
                },10000)
            }else{
                setNotification("error",`No hay stock de productos ${outOfStock.map(prod => prod.name)}`,"bottom-right",3000)
            }
        } catch (error) {
            setNotification("error",`Error sistema ${error}`,"bottom-right",3000)
        }finally{
            setLoading(false)
        }

    }
    
    if(loading){
        return  <div style={{margin:'12em'}} ><Spinner  animation="border" variant="primary" /></div>
    }

    if(orderId){
        return(
            <div className="p-4 m-4 border border-5">
                <h1>El ID de su compra es: {orderId}</h1>
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