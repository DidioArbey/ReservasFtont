import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import routes from '../helpers/routes'
export default function Navegation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>Hotel Aroma cafetera
            </Navbar.Brand>


            <Navbar.Toggle arial-conrols="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={routes.bookings} >Reservas</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.admin.users}>Usuarios</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registrar</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
