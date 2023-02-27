import '../Admin.css'
import React, { useState, useEffect, useRef } from "react";
import Pagination from '../../Complement/Pagination';
import PaginationUser from './PaginationUser';


// const URL_Find_All = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/customer/findById?IdUser=';
const URL_Find_All = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/MoreFeatureGet/findByIdResident?idResident=';
const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/ListAllResidentFromBuilding/'
// const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/MoreFeatureGet/findResidentAll'

const ResidentManagement = () => {
    const [residents, setResidents] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [id, setId] = useState('');
    const [idNull, setIdNull] = useState(true);
    const [building, setBuilding] = useState('A');


    useEffect(() => {
        setId(id);
    }, [id])


    useEffect(() => {
        setBuilding(building)
    },[building])

    useEffect(() => {
        fetch(URL+building)
            .then(response => response.json())
            .then((data) => {
                setResidents(data)
                console.log(data)
            })
            .catch(error => console.error(error));
    }, [building])

    const handleSetBuilding = (item) => {
        setBuilding(item)
    }

    const handleIdFilter = async (e) => {
        e.preventDefault();
        if (id === null || id === '') {

            console.log(URL)
            fetch(URL+building)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(true);
                    setResidents(data)
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
                    setResidents(data)
                    console.log(data)
                })
                .catch(error => console.error(error));




        }

    }


    return (
        <div className="admin-homepage-dashboard">
            <h5 style={{ textAlign: 'left', margin: '20px' }}>Manage Resident</h5>
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
                {idNull ? (<PaginationUser data={residents}></PaginationUser>)

                    : (
                        <tbody><tr >
                            <td>1</td>
                            <td>{console.log(residents)}</td>
                            <td>{residents.id}</td>
                            <td>{residents.fullname}</td>
                            <td>{residents.dateofbirth}</td>
                            <td>{residents.gender ? "Male" : "Female"}</td>
                            <td>{residents.phone}</td>
                            <td>{residents.email}</td>
                            <td style={{ color: residents.status_Account === true ? '#118408' : '#E23F31', fontWeight: 'bold' }}>{residents.status_Account === true ? 'Active' : 'Ban'}</td>
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

export default ResidentManagement;
