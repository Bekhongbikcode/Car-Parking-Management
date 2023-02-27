import AdminFooter from "./AdminPageFooter";
import AdminHeader from "./AdminPageHeader";
import './Admin.css'
import CustomerManagement from "./Sercurity/CustomerManagement";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ResidentManagement from "./Sercurity/ResidentManagement";
import BookingManagement from "./Sercurity/InvoiceManagement";
import InvoiceManagement from "./Sercurity/InvoiceManagement";

const AdminHomePage = () => {
    const [select, setSelect] = useState('Customer');

    const handleItemClick = (item) => {
        setSelect(item);
        if (select == 'Customer') {
            console.log(item)
            return  <CustomerManagement></CustomerManagement>
        }
        else if (select == 'Residents') {
            console.log(item)
            return <ResidentManagement></ResidentManagement>
        }
        else if (select == 'Booking') {
            console.log(item)
            return <BookingManagement></BookingManagement>
        }
        else if (select == 'Invoice') {
            console.log(item)
            return <BookingManagement></BookingManagement>
        }





    };
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="admin-role">
                <div><h3>Sercurity Dashboard</h3></div>
            </div>
            <div className="admin-homepage-body">


                <ul class="nav admin-nav-custom flex-column ">

                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Customer')}>
                        <a class="nav-link active" href="#">Customers</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Residents</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Booking')}>
                        <a class="nav-link active" href="#">Invoices</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoice')}>
                        <a class="nav-link active" href="#">Invoice</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Location</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Location</a>
                    </li>

                </ul>
                
                {select == 'Customer' ? <CustomerManagement></CustomerManagement> 
                    : select == 'Residents' ? <ResidentManagement></ResidentManagement>
                    : select == 'Invoices' ? <InvoiceManagement></InvoiceManagement>
                    : <InvoiceManagement></InvoiceManagement>
                }
                
                
                

            </div>

            <AdminFooter></AdminFooter>
        </div>
    );
}

export default AdminHomePage;