import React from 'react';
import {PaginasApp} from '../data/PaginasApp'
import {Container,Nav,Form,FormControl,Button,Offcanvas,Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


class Menu extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            {PaginasApp.map((item) => {
            return (          
              <Nav.Link as={Link} to={item.path} role="tab">{item.title}</Nav.Link>
            );
          })}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    );
  }
}
export default Menu;