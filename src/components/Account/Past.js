
import React from 'react';
import { Link } from "react-router-dom";
import AccountBody from './accountBody';
import AccountFooter from './accountFooter';
import AccountHeader from './accountHeader';
import './Account.css'

function All() {
    return (
        <div className='take'>
           <AccountHeader/>
            <div className='Past_Choice'>
                <Link className='Past_Link' to={'/Past'}><a>All</a></Link>
                <br></br><br></br>
                <Link className='Past_Link' to={'/Completed'}><a>Completed</a></Link>
                <br></br><br></br>
                <Link className='Past_Link' to={'/Cancelled'}><a>Cancelled</a></Link>
            </div>
            <AccountBody/>
            <AccountFooter/>
        </div>
    );
}

export default All;