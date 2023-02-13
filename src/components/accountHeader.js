import React from 'react';

function Account_Header() {
    return (
        <div className='Header_Account'>
            <div className='Account_Right'>
                <img src="src/logo.svg"></img>
            </div>

            <div className='Account_Left'>
                <button>My account</button>
                <a href='#'>Log out</a>
            </div>
        </div>
    );
}

export default Account_Header;