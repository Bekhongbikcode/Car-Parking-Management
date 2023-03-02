import AdminFooter from "../AdminPageFooter";
import AdminHeader from "../AdminPageHeader";
import '../Admin.css'

import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";


import SercurityManagement from "./SercurityManagement";

const BuildingManagerHomePage = () => {
    const [select, setSelect] = useState('Sercurity');

    const handleItemClick = (item) => {
        setSelect(item);
        if (select == 'Sercurity') {
            console.log(item)
            return  <SercurityManagement ></SercurityManagement>
        }
        

        



    };
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="admin-role">
                <div><h3>Building Manager Dashboard</h3></div>
            </div>
            <div className="admin-homepage-body" style={{marginBottom:'150px'}}>

                <ul class="nav admin-nav-custom flex-column " style={{marginTop:'100px'}}>

                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Sercurity')}>
                        <a class="nav-link active" href="#">Sercurity</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Residents</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoices')}>
                        <a class="nav-link active" href="#">Invoices</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                        <a class="nav-link active" href="#">Slots</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Location</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Location</a>
                    </li>

                </ul>
                
                {select == 'Sercurity' ? <SercurityManagement ></SercurityManagement> 
                    : <SercurityManagement></SercurityManagement>}
                    
                
                
                

            </div>
             <div style={{width:'100%', marginTop:'50px'}}>
             <AdminFooter></AdminFooter>
             </div>   
            
        </div>
    );
}

export default BuildingManagerHomePage;