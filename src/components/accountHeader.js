import React from 'react';

function AccountHeader() {
    return (
        <div className='Header_Account'>
            <div className='Account_Right'>
                <img src="src/logo.svg"></img>
            </div>

            <div className='Account_Left'>
                <button>My account</button>
                <a href='#Login_Page'>Log out</a>
            </div>
        </div>
    );
}

export default AccountHeader;