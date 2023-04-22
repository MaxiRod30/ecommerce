import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ItemContactenos.css"
import { BiPaperPlane } from "react-icons/bi";
import { useNotification } from '../../notification/NotificationService'
import { useState } from "react"
import Spinner from 'react-bootstrap/Spinner';

const ItemContactenos = () => {
    const form = useRef();
    const {setNotification} = useNotification()
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
          .then((result) => {
              setNotification("success",`Se envio correo con su consulta `,"bottom-right",4000)
          })
          .catch( (error) => {
                setNotification("error",`No se pudo enviar el mail debido a un error ${error.text}`,"bottom-right",3000)
            })
            .finally(()=>{
                setLoading(false)
            })
      };

      if(loading){
        return  <div style={{margin:'12em'}} ><Spinner  animation="border" variant="primary" /></div>
    }

    return(
        <div className="d-flex p-2 flex-column align-items-center align-content-center">
            <section className="form-contact">
                <header>
                <span>
                    <BiPaperPlane/>
                </span>
                </header>
        
            <form ref={form} className="contact productVista" onSubmit={sendEmail}>
                <label htmlFor="nombres">Nombres</label>
                <input type="text" className="nombres" name="user_name" id="nombres"/>
            
                <label htmlFor="correo">Correo</label>
                <input type="email" className="correo" name="user_email" id="correo"/>
            
                <label htmlFor="nombres">Celular</label>
                <input type="text" name="user_celular" id="celular"/>
            
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="message" id="mensaje"></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </section>
      </div>
    )
}

export default ItemContactenos

