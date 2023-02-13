import React from 'react';

function Account_Body() {
    return (
        <div className='Body_Account'>
            <div className='Body_Left'>
                <a href='#'>Active Booking</a>
                <br></br><br></br>
                <a href='#'>Past Booking</a>
                <br></br><br></br>
                <a href='#'>My vehicles</a>
                <br></br><br></br>
                <a href='#'>Payment Method</a>
                <br></br><br></br>
                <a href='#'>Profile Settings</a>
                <br></br><br></br>
                <a href='#'>Log out</a>
            </div>

            <div className='Body_Right'>
                <text>You have no upcoming bookings</text>
                <br></br>
                <br></br>
                <br></br>
                <text>Booking parking today</text>
                <br></br>
                <br></br>
                <button>Booking</button>
            </div>
        </div>
    );
}

export default Account_Body;