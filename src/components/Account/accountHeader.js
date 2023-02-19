import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Account.css'

function AccountHeader() {
    // let [take, setTake] = useState([]);
    const notify = () => toast("Wow so easy!");
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setTake(data);
    //             console.log(data)
    //         })
    // }, [])
    return (

        <div className='Header_Account'>
            <div className='Account_Right'>
                <img src="src/logo.svg"></img>
                {/* {take.map((account) => (
                    <div key={account.id}>
                        <h1>{account.body}</h1>
                        </div>
                ))} */}
            </div>

            <div className='Account_Left'>
                <button onClick={notify}>My account</button>
                {/* <ToastContainer /> */}
                <a href='#Login_Page'>Log out</a>
            </div>

        </div>
    );
}

export default AccountHeader;