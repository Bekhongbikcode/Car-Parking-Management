import React from "react";
import { Container, Card, Button, Table } from "react-materialize";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import FooterAccount from './FooterAccount'
import HeaderAccount from './HeaderAccount'
import BodyLink from './BodyLinkAccount'


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
            <BodyLink />
            <Container className="profile-setting">
                <Card>
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
                    <NavLink to="/profilesetting"><Button style={{ marginBottom: "10px", marginTop: "10px" }}>Changes</Button></NavLink>
                </Card>
            </Container>
            <FooterAccount />

        </div>
    )
}

export default AccountInformation;