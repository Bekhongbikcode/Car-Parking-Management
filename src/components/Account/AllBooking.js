import React from "react";
import { Container, Table } from 'react-materialize';
import { useState, useEffect } from "react";
import FooterAccount from '../../../../Account/account/src/components/Account/FooterAccount';
import HeaderAccount from '../../../../Account/account/src/components/Account/HeaderAccount';
import BodyLink from '../../../../Account/account/src/components/Account/BodyLinkAccount';
function AllBooking() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/all')
            .then((response) => response.json())
            .then((bookingData) => {
                setHistory(bookingData);
                console.log(bookingData);
            })
    }, [])
    return (
        <Container className='past-table'>
            <HeaderAccount/>
            <BodyLink/>
            <Table>
                <thead>
                    <tr>
                        <th data-field="id" style={{ textAlign: "center" }}>
                            Start Date
                        </th>
                        <th data-field="name" style={{ textAlign: "center" }}>
                            End Date
                        </th>
                        <th data-field="price" style={{ textAlign: "center" }}>
                            Start Time
                        </th>
                        <th data-field="price" style={{ textAlign: "center" }}>
                            End Time
                        </th>
                        <th data-field="price" style={{ textAlign: "center" }}>
                            Vehicle Type
                        </th>
                        <th data-field="price" style={{ textAlign: "center" }}>
                            Building 
                        </th>
                        <th data-field="price" style={{ textAlign: "center" }}>
                            Slot
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((booking) => (
                        <tr key={booking.id} >
                            <td style={{ textAlign: "center" }}> {booking.startDate} </td>
                            <td style={{ textAlign: "center" }}> {booking.endDate} </td>
                            <td style={{ textAlign: "center" }}> {booking.startTime} </td>
                            <td style={{ textAlign: "center" }}> {booking.endTime} </td>
                            <td style={{ textAlign: "center" }}> {booking.type_Of_Vehicle} </td>
                            <td style={{ textAlign: "center" }}> {booking.id_Building} </td>
                            <td style={{ textAlign: "center" }}> {booking.id_C_Slot} </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <FooterAccount />
        </Container>
    )
}

export default AllBooking;