import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './Account.css'

function HeaderAccount() {
    return (
        <div>
            <Navbar className="menu"
                alignLinks="right"
                brand={<span className="brand-logo">Logo Here</span>}
                id="mobile-nav"
                style={{ backgroundColor: "#2DC98A" }}
            >
                <ul className='navigation-menu'>
                    <li><NavLink to='/account'> Account</NavLink></li>
                    <li><NavLink to='/hello'> Log out</NavLink></li>
                </ul>
            </Navbar>
        </div>
    )
}

export default HeaderAccount;