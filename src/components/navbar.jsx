import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CiHome } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { GrCatalog } from "react-icons/gr";
const Navegacion = () => {
  const { user, logOut } = useAuth();
const navigate = useNavigate();

const handleLogout = () => {
  logOut();
  navigate("/");
};

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <img src={logo} style={{ width: "50px" }} ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
  <Nav.Link as={Link} to="/"> <CiHome style={{ fontSize: "1.5em" }}/> Inicio</Nav.Link>
  <Nav.Link as={Link} to="/Descuentos"><CiDiscount1 style={{fontSize: "1.5em"}}/> Descuentos</Nav.Link>
  <Nav.Link as={Link} to="/catalogo"><GrCatalog style={{fontSize: "1.5em"}}/> Catálogo</Nav.Link>
  {!user && (
    <Nav.Link as={Link} to="/login">
      <CiUser style={{ fontSize: "1.5em" }} /> Usuario
    </Nav.Link>
  )}
  <Nav.Link as={Link} to="/cart">
    <CiShoppingCart style={{ fontSize: "1.5em" }} /> Carrito 
  </Nav.Link>
  {user && (
  <>
    <Nav.Link as={Link} to="/Crud" >Agregar Productos</Nav.Link>
    <Navbar.Text className="me-auto">
      Usuario: <strong>{user}</strong>
    </Navbar.Text>
    <Button variant="outline-light" onClick={handleLogout}>
      Cerrar sesión
    </Button>

  </>
)}
</Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default Navegacion;