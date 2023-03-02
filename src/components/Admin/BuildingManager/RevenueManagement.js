import React from "react";
import { useEffect, useState } from "react";
import './BuildingManager.css'
import { toast } from "react-toastify";

const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/buildingManager/RevenueFromEachBuilding'

const RevenueManagement = () => {
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
                        <th>Building ID</th>
                        <th>Income</th>
                        <th>Manager ID</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((item) => (
                        <tr key={item.id_Building}>
                            <td>{item.id_Building}</td>
                            <td>{item.income}</td>
                            <td>{item.id_manager}</td>
                        </tr>
                    ))}
                </tbody>

            </table>










        </div>
    );
};

export default RevenueManagement;
