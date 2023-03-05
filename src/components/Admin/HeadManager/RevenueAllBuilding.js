import React from "react";
import { useEffect, useState } from "react";
import './HeadManager.css'
import { toast } from "react-toastify";

const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/headManager/RevenueFromAllBuilding'

const RevenueAllManagement = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setItem(data)
            })
            .catch((err) => {
                console.log(toast);
                toast.error('Failed: ' + err.message);
            });
    }, [])


    return (
        <div className="admin-homepage-dashboard">
            <h5 style={{ textAlign: 'left', margin: '20px' }}>Manage Revenue</h5>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Income</th>

                    </tr>
                </thead>
                <tbody>
                    {/* {item.map((item) => (
                        <tr>
                            <td>{item.idUser}</td>
                            <td>{item.income}</td>
                        </tr>
                    ))} */}
                </tbody>

            </table>










        </div>
    );
};

export default RevenueAllManagement;
