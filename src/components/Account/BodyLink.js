import React from 'react';
import { NavLink } from 'react-router-dom'

function BodyLink() {
    return(
        <div className="body-link">
            <ul>
                <li><NavLink to='/allbooking'> All Booking </NavLink></li>
                <li><NavLink to='/pastbooking'> Past Booking </NavLink></li>
                <li><NavLink to='/completedbooking'> Completed Booking </NavLink></li>
                <li><NavLink to='/cancelledbooking'> Cancelled Booking </NavLink></li>
                <li><NavLink to='/profilesetting'> Profile Setting </NavLink></li>
            </ul>
        </div>
    )
}

export default BodyLink;