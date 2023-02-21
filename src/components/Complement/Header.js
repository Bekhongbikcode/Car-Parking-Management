import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './Complement.css'
const Header = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const [displayusername, displayusernameupdate] = useState('');

    return (
        
            <div className="header">

                <div className="logo">

                </div>
                <ul class="nav justify-content-end nav-custom  ">
                    <li class="nav-item">
                    <Link to={'/'}> <a class="nav-link" href="#">Home</a></Link>
                    </li>
                    <li class="nav-item">
                       <Link to={'/Reservation'}> <a class="nav-link" href="#">Reservation</a></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Slots</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Price</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Location</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">More</a>
                        <ul class="dropdown-menu" style={{position:'absolute', zIndex:'100'}}>
                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                        </ul>
                    </li>
                    <li class="nav-item not-hover">
                        <span  > <FontAwesomeIcon icon={faUser} style={{ paddingTop: '10px', color:'black' }} />{displayusername}</span>
                    </li>
                    <li class="nav-item not-hover" style={{ paddingTop: '5px', textDecoration: 'none' }}>
                        <Link to={'/login'}><a>Logout</a></Link>
                    </li>


                </ul>



            </div>





        
    );
}

export default Header;