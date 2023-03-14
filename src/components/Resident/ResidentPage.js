
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle, faUserShield, faSquareParking, faFileInvoiceDollar, faUsers, faPersonShelter, faMoneyBill1Wave, faBuildingUser, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import './Resident.css';
import {url_api} from "../../API/api";


const ResidentPage = () => {
    const [logined, setLogined] = useState(localStorage.getItem("username"));
    const [role, setRole] = useState(localStorage.getItem('role'));
    const usenavigate = useNavigate();


    useEffect(() => {
        if ((logined === null || logined === '')) {
            usenavigate('/AdminLogin')
        }
    }, [logined])

    const [select, setSelect] = useState('Customers');

    const handleItemClick = (item) => {
        setSelect(item);
    };

    return (
        <div>

            <div className="admin-homepage-body" style={{ marginBottom: '150px' }}>
                
                <div class="nav admin-nav-custom flex-column ">
                    <div className="admin-nav-custom-title">
                        <p className='nav-link' style={{ fontSize: '10px', paddingTop: '20px', color: 'white' }} href="#"><FontAwesomeIcon style={{ paddingRight: '10px', paddingLeft: '6%' }} icon={faSpaceShuttle}></FontAwesomeIcon>Your profile</p>
                    </div>
                    <label></label>
                    <ul className="navbar-nav" >

                        <li tabindex="0" class="nav-item " onClick={() => handleItemClick('Customers')}>
                            <a className="nav-link active " href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faUsers} />Your Information</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faPersonShelter} />Your Invoice History</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoices')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faFileInvoiceDollar} />Invoices</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faSquareParking}></FontAwesomeIcon>Slots</a>
                        </li>



                    </ul>
                    
                </div>

                



            </div>

        </div>
    );
}

export default ResidentPage;