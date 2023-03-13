import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './Complement.css'
const Header = (props) => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const [displayusername, displayusernameupdate] = useState('');
    console.log(props.data)
    const logout = () => {
        sessionStorage.removeItem('username')
        window.location.href = '/login';
    }
    return (

        <div className="header">

            <div className="logo">
                <img src={'../assets/img/logo.png'}></img>
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
                    <Link to={'/Price'}><a class="nav-link" href="#">Price</a></Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Location</a>
                </li>
                <Nav class="nav-item">
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Our Vision</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                <Nav class="nav-item">
                    <NavDropdown title={<FontAwesomeIcon icon={faBell}></FontAwesomeIcon>}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                {
                    props.data === null || props.data === ''
                        ? (<>

                            <li class="nav-item not-hover" style={{ paddingTop: '10px', textDecoration: 'none' }}>
                                <Link to={'/login'}><a>Login</a></Link>
                            </li>

                        </>


                        )
                        : (
                            <>

                                <Nav class="nav-item">
                                    <NavDropdown title={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}>
                                        <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item ><a onClick={logout} type="submit">Log out</a></NavDropdown.Item>

                                    </NavDropdown>
                                </Nav>

                            </>
                        )
                }



            </ul>


            <Nav className="nav-item-responsive" style={{ display: 'block' }}>
                <NavDropdown className="icon-nav-item-responsive" title={<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}>
                    
                        <NavDropdown.Item style={{width:'350px', marginLeft:'10'}}><Link to={'/'}> <a class="nav-link" href="#">Home</a></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'/Reservation'}> <a class="nav-link" href="#">Reservation</a></Link></NavDropdown.Item>
                        <NavDropdown.Item><a class="nav-link" href="#">Slots</a></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'/Price'}><a class="nav-link" href="#">Price</a></Link></NavDropdown.Item>
                        <NavDropdown.Item><a class="nav-link" href="#">Location</a></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item ><a onClick={logout} type="submit">Log out</a></NavDropdown.Item>
                    
                </NavDropdown>
            </Nav>

        </div>






    );
}

export default Header;