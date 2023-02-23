import '../Admin.css'
import React, { useState, useEffect, useRef } from "react";
import Pagination from '../../Complement/Pagination';


const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/user/findAll';

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setCustomers(data)
                console.log(data)
            })
            .catch(error => console.error(error));
    }, []);

    const handleIdFilter = () => {
        console.log(id)
        customers.map((item) => {

            if (item.id === id) {
                console.log(item)
                return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.fullname}</td>
                    <td>{item.dateofbirth}</td>
                    <td>{item.gender ? "Male" : "Female"}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                </tr>
                )
            } else
                return null;
        });
    }

    return (
        <div className="admin-homepage-dashboard">
            <h5 style={{ textAlign: 'left', margin: '20px' }}>Manage Customer</h5>
            <form onSubmit={handleIdFilter}>
                Filter by ID:
                <input type="text" onChange={e => setId(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

            {/* <Pagination data={customers}></Pagination> */}

        </div>
    );
}

export default CustomerManagement;
