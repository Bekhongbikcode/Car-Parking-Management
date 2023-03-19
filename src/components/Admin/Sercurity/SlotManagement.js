import '../Admin.css'
import React, { useState, useEffect, useRef, useCallback } from "react";
import PaginationInvoice from './PaginationInvoice';
import './CommanDashBoard.css'
import Popup from './Popup/PopUpOpen';
import { toast } from "react-toastify";
import PopupInforSlot from './Popup/PopUpInforSlot';
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faCarRear, faRoad, faExit, faBicycle, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminHeader from '../AdminPageHeader';
import { url_api } from "../../../API/api";


const URL = url_api + "/present_slot/findAll/";
const URL_Search_Res = url_api + "/user/findById?id=";
const URL_Book = url_api + "/residentslot/saveResidentSlot"
const URL_Infor_R_Slot = url_api + "/security/ResponseResidentInfoSlot?id_Building="
const URL_Infor_C_Slot = url_api + "/security/ResponseCustomerInfoSlot?id_Building="
const URL_INFOR = ''

const SlotManagement = () => {

    const [building, setBuilding] = useState('A')

    const [shells, setShells] = useState([]);

    const [slot, setSlot] = useState('');
    const [success, setSuccess] = useState(false);
    const [idSlot, setIdSlot] = useState('');
    const [inforResSlot, setInforResSlot] = useState([]);
    const [URL_INFOR, setURL_INFOR] = useState('');
    const [role, setRole] = useState('');
    const [showPopupInfor, setShowPopupInfor] = useState(false);
    const [showPopupCreateRes, setShowPopupCreateRes] = useState(false);


    const togglePopupCreateRes = () => {

        setShowPopupCreateRes(!showPopupCreateRes);
    };

    const togglePopupInfor = (id, role, url) => {

        setShowPopupInfor(!showPopupInfor);
        console.log(url)
        console.log(id);
        console.log(url + building + '&id_' + role + '_Slot=' + id)
        fetch(url + building + '&id_' + role + '_Slot=' + id)
            .then(response => response.json())
            .then((data) => {
                setInforResSlot(data)
                setRole(role)
                console.log(url + building + '&id_' + role + '_Slot=' + id)
                console.log(data)
            })
            .catch((error) => {
                if (error.response && error.response.status === 500 || error.response && error.response.status === 400)
                    toast.error('Resident not payment yet!')

            })


    };

    const massageSlot = () => {
        toast.error('Slot null!');
    }



    const handleSetBuilding = (item) => {
        setBuilding(item)
    }



    useEffect(() => {
        setBuilding(building)
    }, [building])

    useEffect(() => {
        fetch(URL + building)
            .then(response => response.json())
            .then((data) => {
                setShells(data)
            })
            .catch(error => console.error(error));
    }, [building])

    const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));

    useEffect(() => {
        const navItems = document.querySelectorAll('.nav-custom-sercurity li');

        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                // Remove the active class from all li elements
                navItems.forEach(item => {
                    item.classList.remove('active');
                });

                // Add the active class to the clicked li element
                navItem.classList.add('active');

                // Call the handleSetBuilding function with the appropriate argument
                handleSetBuilding(navItem.innerText.charAt(navItem.innerText.length - 1));
            });
        });
    }, [])



    return (
        <div className="admin-homepage-dashboard">
            <AdminHeader>/</AdminHeader>
            <ul class="nav justify-content-center nav-custom nav-custom-sercurity" style={{ marginLeft: '60px' }}>
                <li class="nav-item" onClick={() => handleSetBuilding('A')}>
                    <a class="nav-link" href="#"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faBuilding}></FontAwesomeIcon>Zone A</a>
                </li>
                <li class="nav-item" onClick={() => handleSetBuilding('B')}>
                    <a class="nav-link" href="#"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faBuilding}></FontAwesomeIcon>Zone B</a>
                </li>
                <li class="nav-item" onClick={() => handleSetBuilding('C')}>
                    <a class="nav-link" href="#"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faBuilding}></FontAwesomeIcon>Zone C</a>
                </li>
            </ul>


            <div class="table-responsive  align-items-center justify-content-center">
                <div>Resident Area</div>
                <table class="table border" style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px' }}>
                    <tbody>
                        <tr class="border" style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px' }}>
                            {residentSlot.slice(0, 10).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? () => togglePopupInfor(shell.id_slot, 'R', URL_Infor_R_Slot) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px', backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faCarRear}></FontAwesomeIcon>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                        <tr class="border">
                            {residentSlot.slice(10, 20).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? () => togglePopupInfor(shell.id_slot, 'R', URL_Infor_R_Slot) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faBicycle}></FontAwesomeIcon>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                        <tr class="border">
                            {residentSlot.slice(20, 30).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? () => togglePopupInfor(shell.id_slot, 'R', URL_Infor_R_Slot) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>

                <div>Customer Area</div>
                <table class="table border" style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px' }}>
                    <tbody>
                        <tr class="border">

                            {customerSlot.slice(0, 10).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? (() => togglePopupInfor(shell.id_slot, 'C', URL_Infor_C_Slot)) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faCarRear}></FontAwesomeIcon>

                                    {shell.id_slot}

                                </td>
                            ))}
                        </tr>
                        <tr class="border">

                            {customerSlot.slice(10, 20).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? () => togglePopupInfor(shell.id_slot, 'C', URL_Infor_C_Slot) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faBicycle}></FontAwesomeIcon>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                        <tr class="border">

                            {customerSlot.slice(20, 30).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? () => togglePopupInfor(shell.id_slot, 'C', URL_Infor_C_Slot) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                    </tbody>

                </table>

            </div>
            <PopupInforSlot handleClose={togglePopupInfor} show={showPopupInfor} data={inforResSlot} role={role}>

            </PopupInforSlot>

            <button onClick={togglePopupCreateRes} style={{ width: '160px' }}>Create Resident</button>
            <Popup handleClose={togglePopupCreateRes} show={showPopupCreateRes}>

            </Popup>


        </div>
    );
}

export default SlotManagement;
