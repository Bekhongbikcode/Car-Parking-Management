import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faClock, faArrowRight, faCashRegister, } from "@fortawesome/free-solid-svg-icons";
import Slider from "../Complement/Slider"
import Header from "../Complement/Header";
import Footer from "../Complement/Footer";
import './Payment.css'

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const ReservationComplete = () => {

    const [invoice, setInvoice] = useState([]);
    const [username, setUsername] = useState(sessionStorage.getItem('username'));



    useEffect(() => {
        fetch('https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/paymentCustomer/findPayment')
            .then(response => response.json())
            .then((data) => {
                setInvoice(data);
                console.log(data)
            })
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
             <Header data={username}></Header>
            <Slider></Slider>

            <h2 style={{ textAlign: 'center', paddingTop: '30px', color: 'Green' }}>Completed</h2>
            <div class="step-reservation container d-flex align-items-center justify-content-center">
                <Link style={{ textDecoration: 'none' }} to={'/Reservation'}>
                    <div className="circle">
                        <div class="col-lg-3 rounded-circle"><span style={{ textDecoration: 'none' }}>1</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px', textDecoration: 'none' }}>Reservation Details</h6>
                    </div>
                </Link>
                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                <Link style={{ textDecoration: 'none' }} to={'/PaymentInformation'}>
                    <div className="circle">
                        <div class="col-lg-3 rounded-circle"><span>2</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Payment Accuracy</h6>
                    </div>
                </Link>
                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>

                <div className="circle">
                    <div class="col-lg-3 rounded-circle" style={{ backgroundColor: 'black' }}><span>3</span></div>
                    <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Completed</h6>
                </div>


            </div>

            <div style={{ color: 'black', marginLeft: '41%' }} className="complete-infor" >
                <div className="complete-infor-detail" >
                    <span>Invoice ID</span>
                    <i>{invoice.id_C_Invoice}</i>
                    <br />
                    <span>Booking ID</span>
                    <i>{invoice.id_Booking}</i>
                    <br />
                    <span>Payment ID</span>
                    <i>{invoice.id_Payment}</i>
                    <br />
                    <span>Time</span>
                    <i>{invoice.startDate}, {invoice.endDate}, {invoice.startTime}, {invoice.endTime}</i>
                    <br />
                    <span>Status Invoice</span>
                    {(invoice.status_Invoice == true) ? <i style={{color:'green'}}>Completed</i> : <i style={{color:'red'}}>Waiting to pay</i>}
                    <br />
                    <span>Created</span>
                    <i>{sessionStorage.getItem("datebook")}, {sessionStorage.getItem("timebook")}</i>
                    <br />
                    <span>Price</span>
                    <i>10.40</i>
                    <br />
                    <span>Payments</span>
                    <i>{invoice.type_Of_Payment}</i>

                </div>

            </div>





            <Footer></Footer>
        </div>
    )

}
export default ReservationComplete;