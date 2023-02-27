import '../Admin.css'
import React, { useState, useEffect, useRef, useCallback } from "react";
import PaginationInvoice from './PaginationInvoice';
import './SecurityDashBoard.css'
import Popup from './CreateResidentSlot';


const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/present_slot/findAll/';
const URL_Search_Res = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/user/findById?id=';
const URL_Book = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/residentslot/saveResidentSlot'



const SlotManagement = () => {

    const [user, setUser] = useState([]);
    const [id, setId] = useState('');
    const [building, setBuilding] = useState('A')
    const [showPopup, setShowPopup] = useState(false);
    const [shells, setShells] = useState([]);
    const [idSearch, setIdSearch] = useState('');
    const [fullname, setfullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [zone, setZone] = useState('')
    const [typeOfVehicle, setTypeOfVehicle] = useState('');
    const [slot, setSlot] = useState('');


    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    useEffect(() => {
        setIdSearch(idSearch);
    }, [idSearch])

    useEffect(() => {
        setPhone(phone)
    }, [phone]);

    useEffect(() => {
        setEmail(email)
    }, [email]);

    useEffect(() => {
        setfullname(fullname)
    }, [fullname]);

    useEffect(() => {
        setZone(zone);
        console.log(zone);
    }, [zone]);

    useEffect(() => {
        setTypeOfVehicle(typeOfVehicle);
        console.log(typeOfVehicle);
    }, [typeOfVehicle]);

    useEffect(() => {
        setSlot(slot);
        console.log(slot);
    }, [slot]);

    useEffect(()=>{
        setBuilding(building)
    }, [building])


    const handleSetBuilding = (item) => {
        setBuilding(item)
    }

    const handleIdFilter = async (e) => {
        e.preventDefault();
        console.log(URL_Search_Res + idSearch)
        fetch(URL_Search_Res + idSearch)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setUser(data);
                setfullname(data.fullname)
                setEmail(data.email)
                setPhone(data.phone)
                setId(data.id)
            })
            .catch(error => console.error(error));




    }


    


    useEffect(() => {
        setBuilding(building)
    }, [building])

    useEffect(() => {
        fetch(URL + building)
            .then(response => response.json())
            .then((data) => {
                setShells(data)
                console.log(data)
            })
            .catch(error => console.error(error));
    }, [building])

    const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const idUser = idSearch;
        const id_Building = building;
        const type_Of_Vehicle = typeOfVehicle;
        const id_R_Slot = slot;


        const obj = { idUser, id_Building, type_Of_Vehicle, id_R_Slot, fullname, email, phone }
        console.log(obj)

        fetch(URL_Book, {
            method: 'POST',
            header: {

                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",

            },
            body: JSON.stringify(obj)
        }).then((res) => {
            console.log(JSON.stringify(res))

        }).catch((err) => {
            console.log(err.massage())
        });
    }



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
                                <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                        <tr class="border">

                            {residentSlot.slice(10, 20).map(shell => (
                                <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

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
            <button onClick={togglePopup}>Show Popup</button>
            <Popup handleClose={togglePopup} show={showPopup}>
                <h2>Resiter resident slot</h2>
                <div>
                    <form className='filter-id justify-content-start' style={{ marginLeft: '24%' }} onSubmit={handleIdFilter}>
                        <label> Filter by ID: </label>
                        <br />
                        <input type="text" onChange={e => setIdSearch(e.target.value)} style={{ borderRadius: '0' }} />
                        <button type='submit' style={{ borderRadius: '0' }}>Search</button>
                    </form>
                    <label style={{ marginLeft: '25%' }}>Fullname</label>
                    <br />
                    <input style={{ marginLeft: '25%', borderRadius: '0' }} onChange={(e) => setfullname(e.target.value)} value={fullname}></input>
                    <br />
                    <label style={{ marginLeft: '25%' }}>Phone</label>
                    <br />
                    <input style={{ marginLeft: '25%', borderRadius: '0' }} onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                    <br />
                    <label style={{ marginLeft: '25%' }}>Email</label>
                    <br />
                    <input style={{ marginLeft: '25%', borderRadius: '0' }} onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    <br />
                    <label style={{ marginLeft: '25%' }} >Zone</label>
                    <select className="form-select" style={{ marginLeft: '25%', width: '42%', borderRadius: '0' }} onChange={(e) => setBuilding(e.target.value)} value={building} >
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>

                    <label style={{ marginLeft: '25%' }}>Slot</label>

                    <select className="form-select" style={{ marginLeft: '25%', width: '42%', borderRadius: '0' }} onChange={(e) => setSlot(e.target.value)} value={slot}>
                        {residentSlot.map(shell => {
                            if (shell.status_Slots == false) {

                                return <option>{shell.id_slot}</option>
                            }
                        })}


                    </select>
                    <label style={{ marginLeft: '25%' }}>Type of vehicle</label>
                    <select className="form-select" style={{ marginLeft: '25%', width: '42%', borderRadius: '0' }} onChange={(e) => setTypeOfVehicle(e.target.value)} value={typeOfVehicle}>
                        <option>Car</option>
                        <option>Moto</option>
                        <option>Bicycle</option>
                    </select>
                    <br />


                </div>
                <form onSubmit={handleSubmit} className="col-lg-6  class-input">
                    <button style={{ color: "#fff", marginLeft:'42%', width:'60%' }} type="submit">Save Reservation</button>
                </form>
            </Popup>


        </div>
    );
}

export default SlotManagement;
