import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './Admin.css'
const AdminHeader = () => {
   
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const [displayusername, displayusernameupdate] = useState('');
    




    return (
        
            <div className="admin-header">

                <div className="logo">

                </div>
                <ul class="nav justify-content-end nav-custom  ">
                    
                    <li class="nav-item not-hover">
                        <span  > <FontAwesomeIcon icon={faUser} style={{ paddingTop: '10px' }} />{displayusername}</span>
                    </li>
                    <li class="nav-item not-hover" style={{ paddingTop: '5px', textDecoration: 'none' }}>
                        <Link to={'/login'}><a>Logout</a></Link>
                    </li>


                </ul>



            </div>





        
    );
}

export default AdminHeader;