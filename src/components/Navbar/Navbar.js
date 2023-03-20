
import Container from '../../../node_modules/react-bootstrap/Container';
import Form from '../../../node_modules/react-bootstrap/Form';
import Nav from '../../../node_modules/react-bootstrap/Nav';
import Navbar from '../../../node_modules/react-bootstrap/Navbar';
import NavDropdown from '../../../node_modules/react-bootstrap/NavDropdown';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">ElectroMax</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Contactenos</Nav.Link>
                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Domesticos</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Industriales</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Consulte por soluciones</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                        <Form className="d-flex">
                            <Nav.Link href="#action2"> <CartWidget /> </Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export default NavBar