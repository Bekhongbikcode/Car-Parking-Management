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

    const handleIdFilter = (event) => {
        setId(event.target.value);
        setFilteredCustomers(customers.filter(cus => cus.id === event.target.value));
      }

    return (
        <div className="admin-homepage-dashboard">
            <h5 style={{ textAlign: 'left', margin: '20px' }}>Manage Customer</h5>
            <form onSubmit={handleIdFilter}>
                Filter by ID:
                <input type="text"  onChange={e => setId(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

            <Pagination data={customers}></Pagination>

        </div>
    );
}

export default CustomerManagement;
