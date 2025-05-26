import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navegacion = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <img src={logo} style={{ width: "50px" }} ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Descuentos">Descuentos</Nav.Link>
              <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
              <Nav.Link as={Link} to="/login">
                <CiUser style={{ fontSize: "1.5em" }}/>usuario </Nav.Link>
              <Nav.Link as={Link} to="/cart">
              <CiShoppingCart style={{fontSize: "1.5em"}}/> carrito </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default Navegacion;