import "./CardFilter.css"
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {IoIosArrowDropdown} from 'react-icons/io'
 
const CartFilter = () => {
    return(
        <Navbar  bg="conteinerCard" expand="lg"  >
            <Container>
            <NavLink to={"/"} className='conteinerTitule'>Filtro</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title={<span className="textDrop"><IoIosArrowDropdown/> Marcas</span>} id="basic-nav-dropdown " bg="dark">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Todos</NavLink>
                    <NavLink to={"/brand/DL"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >DL</NavLink>
                    <NavLink to={"/brand/Adidas"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Adidas</NavLink>
                    <NavLink to={"/brand/Nike"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Nike</NavLink>
                    <NavLink to={"/brand/Puma"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Puma</NavLink>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }
    
    export default CartFilter
