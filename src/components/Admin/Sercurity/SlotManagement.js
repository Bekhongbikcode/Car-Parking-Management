import '../Admin.css'
import React, { useState, useEffect, useRef, useCallback } from "react";
import PaginationInvoice from './PaginationInvoice';
import './SecurityDashBoard.css'
import Popup from './Popup/PopUpOpen';
import { toast } from "react-toastify";
import PopupInforSlot from './Popup/PopUpInforSlot';


const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/present_slot/findAll/';
const URL_Search_Res = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/user/findById?id=';
const URL_Book = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/residentslot/saveResidentSlot'
const URL_Infor_R_Slot = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/ResponseResidentInfoSlot?id_Building='


const SlotManagement = () => {


    const [building, setBuilding] = useState('A')

    const [shells, setShells] = useState([]);
    
    const [slot, setSlot] = useState('');
    const [success, setSuccess] = useState(false);
    const [idSlot, setIdSlot] = useState('');
    const [inforResSlot, setInforResSlot] = useState([]);



    const [showPopupInfor, setShowPopupInfor] = useState(false);
    const [showPopupCreateRes, setShowPopupCreateRes] = useState(false);
    const togglePopupCreateRes = () => {

        setShowPopupCreateRes(!showPopupCreateRes);
    };

    const togglePopupInfor = (id) => {

        setShowPopupInfor(!showPopupInfor);
        console.log(id)
        console.log(URL_Infor_R_Slot + building + '&id_R_Slot=' + id)
        fetch(URL_Infor_R_Slot + building + '&id_R_Slot=' + id)
            .then(response => response.json())
            .then((data) => {
                setInforResSlot(data)
                // console.log(URL_Infor_R_Slot + building + '&id_R_Slot=' + id)
                console.log(data)
            })
            .catch(error => console.error(error));

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

    


    return (
        <div className="admin-homepage-dashboard">
            <h5 style={{ textAlign: 'left', margin: '20px', marginBottom: 0 }}>Manage Slot</h5>
            <ul class="nav justify-content-center nav-custom nav-custom-sercurity" style={{ marginLeft: '60px' }}>
                <li class="nav-item" onClick={() => handleSetBuilding('A')}>
                    <a class="nav-link" href="#">Zone A</a>
                </li>
                <li class="nav-item" onClick={() => handleSetBuilding('B')}>
                    <a class="nav-link" href="#">Zone B</a>
                </li>
                <li class="nav-item" onClick={() => handleSetBuilding('C')}>
                    <a class="nav-link" href="#">Zone C</a>
                </li>
            </ul>


            <div class="table-responsive  align-items-center justify-content-center">
                <div>Resident Area</div>
                <table class="table border">
                    <tbody>
                        <tr class="border">
                            {residentSlot.slice(0, 10).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? () => togglePopupInfor(shell.id_slot) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                        <tr class="border">
                            {residentSlot.slice(10, 20).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? () => togglePopupInfor(shell.id_slot) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>

                <div>Customer Area</div>
                <table class="table border">
                    <tbody>
                        <tr class="border">

                            {customerSlot.slice(0, 10).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? (() => togglePopupInfor(shell.id_slot)) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    {shell.id_slot}

                                </td>
                            ))}
                        </tr>
                        <tr class="border">

                            {customerSlot.slice(10, 20).map(shell => (
                                <td
                                    onClick={shell.status_Slots === true ? () => togglePopupInfor(shell.id_slot) : massageSlot}
                                    className="border" key={shell.id}
                                    style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}
                                >
                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                    </tbody>

                </table>

            </div>
            <PopupInforSlot handleClose={togglePopupInfor} show={showPopupInfor} data={inforResSlot}>
                
            </PopupInforSlot>

            <button onClick={togglePopupCreateRes} style={{ width: '160px' }}>Create Resident</button>
            <Popup handleClose={togglePopupCreateRes} show={showPopupCreateRes}>

            </Popup>


        </div>
    );
}

export default SlotManagement;
