
import React from 'react'

import { Navbar, Nav, Row, Col} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'
export default function Navegation() {

    const {logout} = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>
            <img src="/img/Aroma.svg" width="120" height="50" className="d-inline-block align-top" alt="logo aroma cafetera"/>
            </Navbar.Brand>


            <Navbar.Toggle arial-conrols="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Row>
                <Col>
                <Nav  className="mr-5 pr-5">
                    <Nav.Link as={NavLink} to={routes.bookings} >Reservas</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.booking} >Listado reservas</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.users}>Usuarios</Nav.Link>
                </Nav>
                </Col> 
                <Col className="mx-5 px-5"></Col>
                <Col className="mx-5 px-5"></Col>
                <Col className="mx-5 px-5"></Col>
                <Col className="ml-2 pl-2 ">
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registrar</Nav.Link>
                    <Nav.Link to={routes.account} onClick={logout} >Cerrar Sesion</Nav.Link>
                </Nav>
                </Col>  
                </Row>
            </Navbar.Collapse>
        </Navbar>
    )
}
