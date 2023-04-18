import "./CardFilter.css"
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {IoIosArrowDropdown} from 'react-icons/io'
import { useState, useEffect } from "react"; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const CartFilter = () => {
    const [brand,setBrand] = useState([])

    useEffect(()=>{
        const brandRef = query(collection(db , "brand"), orderBy('order','asc'))
        getDocs(brandRef)
        .then(snapshop =>{
            const brandAdapted = snapshop.docs.map(doc =>{
                const data = doc.data()
                return{ id: doc.id , ...data}
            })
            setBrand(brandAdapted)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])

    return(
        <Navbar  bg="conteinerCard" expand="lg"  >
            <Container>
            <NavLink to={"/"} className='conteinerTitule'>Filtro</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title={<span className="textDrop"><IoIosArrowDropdown/> Marcas</span>} id="basic-nav-dropdown " bg="dark">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Todos</NavLink>
                    {
                        brand.map(bra => {
                            return <NavLink key={bra.id} to={`/brand/${bra.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >{bra.label}</NavLink>
                        })
                    }
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }
    
    export default CartFilter
