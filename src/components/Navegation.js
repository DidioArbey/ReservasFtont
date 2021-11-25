import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
export default function Navegation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand>Administrar reservas</Navbar.Brand>
            <Navbar.Toggle arial-conrols="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>Reservas</Nav.Link>
                    <Nav.Link>Usuarios</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>Login</Nav.Link>
                    <Nav.Link>Registrar</Nav.Link>
                    <Nav.Link>Cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
