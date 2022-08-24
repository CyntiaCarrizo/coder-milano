import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
      <>
     

    <Navbar className="navBar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src="./logoo.jpg" width="75" height="75"></img>
            <span>Milano Beers & Cheers</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/category/1">Cervezas</Nav.Link>
            <Nav.Link as={Link}  to="/category/2">Vinos</Nav.Link>
            <Nav.Link as={Link} to="/category/5">Energizantes</Nav.Link>
            <Nav.Link as={Link} to="" >
                 <h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search icons" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                 </svg></h4>  
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
                <CartWidget >Mi Carrito</CartWidget>
            </Nav.Link>
            <Nav.Link as={Link} to="">
            <h4>Ingresar/Registrarme
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill icons" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
             </svg></h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
      
      
     
      </>
    );
  }
  
  export default NavBar;
  