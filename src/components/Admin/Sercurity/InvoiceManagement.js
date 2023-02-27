import '../Admin.css'
import React, { useState, useEffect, useRef } from "react";
import Pagination from '../../Complement/Pagination';
import PaginationInvoice from './PaginationInvoice';


const URL_Find_ID = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/searchResidentInvoiceId/';
const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/findAllResidentInvoice'

const InvoiceManagement = () => {
    const [obj, setObj] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [id, setId] = useState('');
    const [idNull, setIdNull] = useState(true);
    const [building, setBuilding] = useState('A');

    useEffect(() => {
        setId(id);
    }, [id])


    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setObj(data)
                console.log(data)
            })
            .catch(error => console.error(error));
    }, [])

    const handleSetBuilding = (item) => {
        setBuilding(item)
    }

    const handleIdFilter = async (e) => {

        e.preventDefault();
        if (id === null || id === '') {

            console.log(URL)
            fetch(URL)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(true);
                    setObj(data)
                    console.log(data)
                })
                .catch(error => console.error(error));
        }
        else {

            console.log(URL_Find_ID + id)
            fetch(URL_Find_ID + id)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(false);
                    setObj(data)
                    console.log(data)
                })
                .catch(error => console.error(error));

        }

    }

    return (
        <div className="admin-homepage-dashboard">
            <h5 style={{ textAlign: 'left', margin: '20px' }}>Manage Booking</h5>
            <ul class="nav justify-content-end nav-custom  ">
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
            <form onSubmit={handleIdFilter}>
                Filter by ID:
                <input type="text" onChange={e => setId(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
            {idNull ?
                (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Id_R_Invoice</th>
                                <th>Id_Payment</th>
                                <th>Id_Resident</th>
                                <th>TypeOfPayment</th>
                                <th>Time</th>
                                <th>Total_Of_Money</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <PaginationInvoice data={obj}></PaginationInvoice>
                        
                    </table>
                )
                : (

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Id</th>
                                <th>Full name</th>
                                <th>Date of birth</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>{obj.id_R_Invoice}</td>
                                <td>{obj.id_Payment}</td>
                                <td>{obj.id_Resident}</td>
                                <td>{obj.typeOfPayment}</td>
                                <td>{obj.time}</td>
                                <td>{obj.total_Of_Money}</td>
                                <td>{obj.status ? "Complete" : "Not Complete"}</td>
                            </tr>
                        </tbody>
                    </table>

                )}




        </div>
    );
}

export default InvoiceManagement;
