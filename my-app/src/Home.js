import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar className='navbar-dark bg-dark px-5' expand="md">
                    <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                    <NavbarBrand tag={Link} to="/bardemo">Bar</NavbarBrand>
                    <NavbarBrand tag={Link} to="/spheredemo">Sphere</NavbarBrand>
                    <NavbarBrand tag={Link} to="/treedemo">Tree</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Home;