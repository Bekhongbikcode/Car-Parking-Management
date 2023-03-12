import React from "react";
import { useEffect, useState } from "react";
import './HeadManager.css'
import { toast } from "react-toastify";
import AdminHeader from "../AdminPageHeader";

const URL = 'https://cors-anywhere-production-8d5d.up.railway.app/https://parking-management-system-deploy-production-d240.up.railway.app/headManager/RevenueFromAllBuilding'

const RevenueAllManagement = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setItems(data)
                console.log(data);
            })
            .catch((err) => {
                console.log(toast);
                toast.error('Failed: ' + err.message);
            });
    }, [])

    return (
        <div className="admin-homepage-dashboard">
            <AdminHeader></AdminHeader>

            <table className="table table-striped"  style={{marginTop:'50px'}}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{items.idUser}</td>
                        <td>{items.income}</td>
                    </tr>

                </tbody>

            </table>










        </div>
    );
};

export default RevenueAllManagement;
