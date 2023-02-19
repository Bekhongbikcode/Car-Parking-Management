import React from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import './Account.css'

function AccountBody() {
    const notifing = () => toast("Booking complete!");
    return (
        <div className='Body_Account'>
            <div className='Body_Left'>
                <Link className='Linking_Page' to={'/'}><a>Active Booking</a></Link>
                <br></br><br></br>
                <Link className='Linking_Page' to='/Past'> <a>Past Booking</a></Link>
                <br></br><br></br>
                <Link className='Linking_Page' to='/Vehicle'> <a>My vehicles</a></Link>
                <br></br><br></br>
                <Link className='Linking_Page' to='/Payment'> <a>Payment Method</a></Link>
                <br></br><br></br>
                <Link className='Linking_Page' to='/Profile'> <a>Profile Settings</a></Link>
                <br></br><br></br>
                <Link className='Linking_Page' to='/Home'> <a>Log out</a></Link>
            </div>

            <div className='Body_Right'>
                <text>You have no upcoming bookings</text>
                <br></br>
                <br></br>
                <br></br>
                <text>Booking parking today</text>
                <br></br>
                <br></br>
                <div>
                    <ToastContainer/>
                <button onClick={notifing}>Booking </button>
                </div>
            </div>
        </div>
    );
}

export default AccountBody;