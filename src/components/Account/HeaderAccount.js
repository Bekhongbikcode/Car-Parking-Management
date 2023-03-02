import React from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Icon, Navbar, CardTitle, Col, Card, Row, NavItem } from "react-materialize";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

function HeaderAccount() {
    return (
        <div>
            <Navbar className="menu"
                alignLinks="right"
                brand={<span className="brand-logo">Logo Here</span>}
                id="mobile-nav"
                menuIcon={<Icon>Menu</Icon>}
                style={{ backgroundColor: "#2DC98A" }}
            >
                <ul>
                    <li><NavLink to='/accountinformation'><Icon left></Icon> My Account</NavLink></li>
                    <li><NavLink to='/hello'><Icon left></Icon> Log out</NavLink></li>
                </ul>
            </Navbar>
        </div>
    )
}

export default HeaderAccount;