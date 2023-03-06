import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import HeaderAccount from './HeaderAccount';
import BodyLink from './BodyLink';
import FooterAccount from './FooterAccount';

function AccountInformation() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/account')
            .then((response) => response.json())
            .then((bookingData) => {
                setHistory(bookingData);
                console.log(bookingData);
            })
    }, [])
    return (
        <div>
            <HeaderAccount />
            <div style={{ display: "flex", marginTop:"5%", marginBottom:"10%" }}>

                <BodyLink />
                <Container>
                <Table>
                        <thead>
                            <tr>
                                <th data-field="id" style={{ textAlign: "center" }}>
                                    First Name
                                </th>
                                <th data-field="name" style={{ textAlign: "center" }}>
                                    Last Name
                                </th>
                                <th data-field="email" style={{ textAlign: "center" }}>
                                    Email
                                </th>
                                <th data-field="company" style={{ textAlign: "center" }}>
                                    Phone
                                </th>
                                <th data-field="gender" style={{ textAlign: "center" }}>
                                    Gender
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((booking) => (
                                <tr key={booking.id} >
                                    <td style={{ textAlign: "center" }}> {booking.firstName} </td>
                                    <td style={{ textAlign: "center" }}> {booking.lastName} </td>
                                    <td style={{ textAlign: "center" }}> {booking.email} </td>
                                    <td style={{ textAlign: "center" }}> {booking.phone} </td>
                                    <td style={{ textAlign: "center" }}> {booking.gender} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                <NavLink to="/profilesetting"><Button style={{ marginBottom: "10px", marginTop: "10px", marginLeft:"50%"}}>Changes</Button></NavLink>
                </Container>
            </div>
            <FooterAccount />
        </div>
    )
}

export default AccountInformation;