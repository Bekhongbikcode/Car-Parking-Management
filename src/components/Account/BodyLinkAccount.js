import React from "react";
import { NavLink } from 'react-router-dom'
import { Container, Icon, Navbar, CardTitle, Col, Card, Row, NavItem } from "react-materialize";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

function BodyLink() {
    return (
        <div className="body-link">
            <ul>
                <li><NavLink to='/allbooking'><Icon left></Icon> All Booking </NavLink></li>
                <li><NavLink to='/pastbooking'><Icon left></Icon> Past Booking </NavLink></li>
                <li><NavLink to='/completedbooking'><Icon left></Icon> Completed Booking </NavLink></li>
                <li><NavLink to='/cancelledbooking'><Icon left></Icon> Cancelled Booking </NavLink></li>
                <li><NavLink to='/profilesetting'><Icon left></Icon> Profile Setting </NavLink></li>
            </ul>
        </div>
    )
}

export default BodyLink;