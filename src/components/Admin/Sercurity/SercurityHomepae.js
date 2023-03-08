import AdminFooter from "../AdminPageFooter";
import AdminHeader from "../AdminPageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faSquareParking, faFileInvoiceDollar, faUsers, faPersonShelter } from "@fortawesome/free-solid-svg-icons";
import '../Admin.css'
import CustomerManagement from "./CustomerManagement";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ResidentManagement from "./ResidentManagement";
import BookingManagement from "./InvoiceManagement";
import InvoiceManagement from "./InvoiceManagement";
import SlotManagement from "./SlotManagement";

const SercurityHomePage = () => {
    const [logined, setLogined] = useState(localStorage.getItem("username"));
    const [role, setRole] = useState(localStorage.getItem('role'))
    const usenavigate = useNavigate();


    useEffect(() => {
        if ((logined === null || logined === '') || role != 3) {
            usenavigate('/AdminLogin')
        }
    }, [logined])

    const [select, setSelect] = useState('');

    const handleItemClick = (item) => {
        setSelect(item);
        if (select === 'Customers') {
            console.log(item)
            return <CustomerManagement></CustomerManagement>
        }
        else if (select === 'Residents') {
            console.log(item)
            return <ResidentManagement></ResidentManagement>
        }
        else if (select === 'Booking') {
            console.log(item)
            return <BookingManagement></BookingManagement>
        }
        else if (select === 'Invoice') {
            console.log(item)
            return <BookingManagement></BookingManagement>
        }



    };
    return (
        <div>

            <div className="admin-homepage-body" style={{ marginBottom: '150px' }}>

                <div class="nav admin-nav-custom flex-column ">
                    <div className="admin-nav-custom-title">
                            <p className='nav-link' style={{fontSize:'25px', paddingTop:'20px'}} href="#"><FontAwesomeIcon style={{paddingRight:'30px', paddingLeft:'6%'}} icon={faBarsProgress}></FontAwesomeIcon>Admin Page</p>
                    </div>
                    <ul className="navbar-nav" style={{display:'none'}}>

                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Customers')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faUsers} />Customers</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faPersonShelter}/>Residents</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoices')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faFileInvoiceDollar}/>Invoices</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faSquareParking}></FontAwesomeIcon>Slots</a>
                        </li>
                        
                        

                    </ul>
                    <ul className="navbar-nav">

                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Customers')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faUsers} />Customers</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faPersonShelter}/>Residents</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoices')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faFileInvoiceDollar}/>Invoices</a>
                        </li>className
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faSquareParking}></FontAwesomeIcon>Slots</a>
                        </li>
                        
                        

                    </ul>

                    <ul className="navbar-nav">

                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Customers')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faUsers} />Customers</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faPersonShelter}/>Residents</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoices')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faFileInvoiceDollar}/>Invoices</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{paddingRight:'30px'}} icon={faSquareParking}></FontAwesomeIcon>Slots</a>
                        </li>
                        
                        

                    </ul>
                </div>

                {select == 'Customers' ? <CustomerManagement></CustomerManagement>
                    : select == 'Residents' ? <ResidentManagement></ResidentManagement>
                        : select == 'Invoices' ? <InvoiceManagement></InvoiceManagement>
                            : <SlotManagement></SlotManagement>
                }



            </div>
            
        </div>
    );
}

export default SercurityHomePage;