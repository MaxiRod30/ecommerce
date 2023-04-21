import "./CardFilter.css"
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {IoIosArrowDropdown} from 'react-icons/io'

import { getBrand } from "../../services/firebase/firestore/brand";
import { useAsync } from "../../hook/useAsync";

const CartFilter = () => {

    const {data: brand , error , loading} = useAsync(()=> getBrand(), [])

    if(loading){
        return  <div style={{margin:'12em'}} ><Spinner  animation="border" variant="primary" /></div>
    }
    if(error){
        return  <div style={{margin:'12em'}} ><h1>Error {error}</h1></div>
    }


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
