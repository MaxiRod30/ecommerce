import { useState } from "react"


const ContactForm = ({ onConfirm }) => {

    const userData = {
        name: "",
        lastName:"",
        phone:"",
        mail:"",
        adress:"",
        postalCode:""
    }
    
    const [ user , setUser] = useState(userData)
    
    const handleSubmit = () =>{
        onConfirm(user)
    }

    return (
        <form className="d-flex p-2 flex-column align-items-center align-content-center g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="validationCustom01" value={user.name} onChange={(e)=>setUser({...user,name: e.target.value})} required></input>
                <div className="valid-feedback">
                ¡Se ve bien!
                </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="validationCustom02" value={user.lastName} onChange={(e)=>setUser({...user, lastName: e.target.value})} required></input>
                <div className="valid-feedback">
                ¡Se ve bien!
                </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">Celular</label>
                <input type="number"  className="form-control" id="validationCustom02" value={user.phone} onChange={(e)=>setUser({...user, phone: e.target.value})} required></input>
                <div className="valid-feedback">
                ¡Se ve bien!
                </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Mail</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.mail} onChange={(e)=>setUser({...user, mail: e.target.value})} required></input>
                <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom03" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="validationCustom03" value={user.adress} onChange={(e)=>setUser({...user, adress: e.target.value})} required></input>
                <div className="invalid-feedback">
                Proporciona una ciudad válida.
                </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">Código postal</label>
                <input type="text" className="form-control" id="validationCustom05" value={user.postalCode} onChange={(e)=>setUser({...user, postalCode: e.target.value})} required></input>
                <div className="invalid-feedback">
                Proporciona un código postal válido.
                </div>
            </div>
            <div className="col-12 p-4">
                <button className="btn btn-primary">Generar Orden</button>
            </div>
        </form>
        )
}

export default ContactForm
