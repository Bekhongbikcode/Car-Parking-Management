
import React from 'react';
import AccountBody from './accountBody';
import AccountFooter from './accountFooter';
import AccountHeader from './accountHeader';
import './Account.css'
function Account() {
    return (
        <div className=''>
            <AccountHeader/>
            <AccountBody/>
            <AccountFooter/>
        </div>
    );
}

export default Account;