import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class SideBar extends Component {
    constructor(props) {
        super(props)

        this.handleSignout = this.handleSignout.bind(this);
    }

    handleSignout() {
        localStorage.clear();
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand href="/home">RBK Work Space</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/" onClick={this.handleSignout}>Sign Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        )
    }
}