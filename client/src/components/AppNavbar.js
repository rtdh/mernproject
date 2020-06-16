import React, { Component } from 'react';

import  { Navbar, Nav, NavDropdown }  from 'react-bootstrap';

export default class AppNavbar extends Component {

    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    render() {
        return (
            <Navbar variant="dark" expand="lg" style={{padding: '0.3% 10%'}}>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" ref={this.myRef}>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addteacher">Add New</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/teacherslist">Teachers List</NavDropdown.Item>
                            <NavDropdown.Item href="/teachersreport">Report</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/fileupload">File Upload</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                    <Nav.Link href="/login" className="btn btn-success" style={{padding: '1px 15px', marginTop: '6px'}}>Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           
        )
    }
}
