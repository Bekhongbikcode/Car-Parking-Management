import '../Admin.css'
import React, { useState, useEffect, useRef, useCallback } from "react";
import PaginationInvoice from './PaginationInvoice';
import './SecurityDashBoard.css'


const URL_Find_C_ID = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/searchCustomerInvoiceId/';
const URL_Find_R_ID = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/searchResidentInvoiceId/';
const URL_R = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/findAllResidentInvoice'
const URL_C = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/findAllCustomerInvoice'


const SlotManagement = () => {
    const [obj, setObj] = useState([]);
    const [id, setId] = useState('');
    const [idNull, setIdNull] = useState(true);
    const [user, setUser] = useState('Resident');
    const [URL, setURL] = useState(URL_R);
    const [URLby, setURLby] = useState('');

    const handleSetBuilding = useCallback((item) => {
        setUser(item);
    }, []);

    const [shells, setShells] = useState([]);
    const [shellsR, setShellsR] = useState([]);

    useEffect(() => {
        fetch('https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/present_slot/findAll/A')
            .then(response => response.json())
            .then((data) => {
                setShells(data)
                // console.log(data)
            })
            .catch(error => console.error(error));



    }, []);

    

    const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));



    useEffect(() => {
        if (user === 'Customer') {

            setURL(URL_C)
            setURLby(URL_Find_C_ID)
            console.log(URL_C)
            console.log(user);
        }
        else {
            setURL(URL_R)
            setURLby(URL_Find_R_ID)
            console.log(URL_R)
            console.log(user);
        }

    }, [user])



    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setObj(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }, [URL]);



    const handleIdFilter = async (e) => {

        e.preventDefault();
        if (id === null || id === '') {

            if (user === 'Customer') {

                setURL(URL_C)
                console.log(URL)
                console.log(user);
            }
            else {
                setURL(URL_R)
                console.log(URL)
                console.log(user);
            }
            fetch(URL)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(true);
                    setObj(data)
                    console.log(data)
                })
                .catch(error => console.error(error));
        }
        else {

            console.log(URLby + id)
            fetch(URLby + id)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(false);
                    setObj(data)
                    console.log(data)
                })
                .catch(error => console.error(error));

        }

    }

    return (
        <div className="admin-homepage-dashboard">
            <h5 style={{ textAlign: 'left', margin: '20px', marginBottom: 0 }}>Manage Invoice</h5>
            <ul class="nav justify-content-center nav-custom nav-custom-sercurity  ">
                <li class="nav-item" onClick={() => handleSetBuilding('Resident')}>
                    <a class="nav-link" href="#">Resident</a>
                </li>
                <li class="nav-item" onClick={() => handleSetBuilding('Customer')}>
                    <a class="nav-link" href="#">Customer</a>
                </li>

            </ul>
            <form className='filter-id justify-content-center' onSubmit={handleIdFilter}>
                Filter by ID:
                <input type="text" onChange={e => setId(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
            <div>Customer Area</div>
            <table class="table border">
                <tbody>
                    <tr class="border">

                        {customerSlot.slice(0, 10).map(shell => (
                            <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                {shell.id_slot}
                            </td>
                        ))}
                    </tr>
                    <tr class="border">

                        {customerSlot.slice(10, 20).map(shell => (
                            <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                {shell.id_slot}
                            </td>
                        ))}
                    </tr>
                </tbody>

            </table>


        </div>
    );
}

export default SlotManagement;
