import { Button, Col, Container, Form, NavDropdown, Nav, Navbar, Row, NavbarBrand } from "react-bootstrap";
import  Logo2  from "./imag1/Logo2.png";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../util/Tokenutil";
import { Navigate } from "react-router-dom";

export function NavigationBar() {

    const handleLogout=()=>
    {
      logout();
      Navigate(`/`);
    }

    return (
        
        <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mb-3 navbar1">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo2}
                        width="120"
                        height="100"
                        className="d-inline-block align-top class3"
                    />{'   '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    
                        <Navbar.Brand href="/Action" >Action</Navbar.Brand>
                        <Navbar.Brand href="/Arcade" >Arcade</Navbar.Brand>
                        <Navbar.Brand href="/puzzle" >Puzzle</Navbar.Brand>
                        <Navbar.Brand href="/Racing" >Racing</Navbar.Brand>
                        <Navbar.Brand href="/FAQ">FAQ</Navbar.Brand>
                        <Navbar.Brand href="/ContactUs">Contact Us</Navbar.Brand>

                        
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                        <LinkContainer to="/Login"><NavDropdown.Item >Sign In</NavDropdown.Item></LinkContainer>
                            <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                            <NavDropdown.Item href="/SupportForm">Support</NavDropdown.Item>
                        </NavDropdown><br />
                       
                        
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                             </Row>
                        </Form>
                        <Button variant="success" onClick={handleLogout}>Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}