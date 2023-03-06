import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap'
import HeaderAccount from './HeaderAccount';
import BodyLink from './BodyLink';
import FooterAccount from './FooterAccount';

function HistoryBooking() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/past')
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
                    <Table className='table-stripped'>
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
                </Container>
            </div>
            <FooterAccount />
        </div>
    )
}

export default HistoryBooking;