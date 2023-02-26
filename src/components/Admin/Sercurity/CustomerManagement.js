import '../Admin.css'
import React, { useState, useEffect, useRef } from "react";
import Pagination from '../../Complement/Pagination';


const URL_Find_All = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/MoreFeatureGet/findByIdCustomer?idCustomer=';
// const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/ListAllCustomerFromBuilding/'
const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/MoreFeatureGet/findCustomerAll'

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([]);
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
                setCustomers(data)
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
            fetch(URL + building)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(true);
                    setCustomers(data)
                    console.log(data)
                })
                .catch(error => console.error(error));

        }
        else {

            console.log(URL_Find_All + id)
            fetch(URL_Find_All + id)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(false);
                    setCustomers(data)
                    console.log(data)
                })
                .catch(error => console.error(error));




        }

    }

    return (
        <div className="admin-homepage-dashboard">
            <h5 style={{ textAlign: 'left', margin: '20px' }}>Manage Customer</h5>
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
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {idNull ? (<Pagination data={customers}></Pagination>)

                    : (
                        <tbody><tr >
                            <td>{console.log(customers)}</td>
                            <td>{customers.id}</td>
                            <td>{customers.fullname}</td>
                            <td>{customers.dateofbirth}</td>
                            <td>{customers.gender ? "Male" : "Female"}</td>
                            <td>{customers.phone}</td>
                            <td>{customers.email}</td>
                            <td style={{ color: customers.status_Account === true ? '#118408' : '#E23F31', fontWeight: 'bold' }}>{customers.status_Account === true ? 'Active' : 'Ban'}</td>
                            <td>
                                <form>
                                    <button style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', width: '55px', borderRadius: '2px' }}>Edit</button>
                                </form>
                            </td>
                        </tr>
                        </tbody>
                    )
                }
            </table>









        </div>
    );
}

export default CustomerManagement;
