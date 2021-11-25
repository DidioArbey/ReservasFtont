import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default function Navegation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand>Hotel Aroma cafetera</Navbar.Brand>
            <Navbar.Toggle arial-conrols="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/bookings" >Reservas</Nav.Link>
                    <Nav.Link as={NavLink} to="/admin/:users" >Usuarios</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="/login" >Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/register" >Registrar</Nav.Link>
                    <Nav.Link as={NavLink} to="/account" >Cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
