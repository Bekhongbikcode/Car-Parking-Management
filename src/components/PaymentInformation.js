import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import visa from 'public/assets/img/visa.png'
import { faCheck, faTimes, faInfoCircle, faUser, faClock, faArrowRight, faCashRegister, } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider"
import Header from "./Header";
import Footer from "./Footer";
import ReservationDetail from "./ReservationDetail";

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const PaymentInformation = () => {



    return (
        <div>
            <Header></Header>
            <Slider></Slider>

            <h2 style={{ textAlign: 'center', paddingTop: '30px', color: '#BA3925' }}>Processing...</h2>
            <div class="step-reservation container d-flex align-items-center justify-content-center">
                <div className="circle">
                    <div class="col-lg-3 rounded-circle"><span>1</span></div>
                    <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Details</h6>
                </div>
                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                <div className="circle">
                    <div class="col-lg-3 rounded-circle"><span>1</span></div>
                    <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Details</h6>
                </div>
                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                <div className="circle">
                    <div class="col-lg-3 rounded-circle"><span>1</span></div>
                    <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Details</h6>
                </div>
                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                <div className="circle">
                    <div class="col-lg-3 rounded-circle"><span>1</span></div>
                    <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Details</h6>
                </div>
            </div>

            <form onSubmit={''}>
                <div style={{ color: 'black' }} className="payment-infor">
                    <p style={{ fontWeight: 'bold' }}>Your reservation ID is: { }</p>
                    <p style={{ width: '500px' }}>In order to complete your reservation, you will need to make an online payment. Click the button below to go to a secure payment site.</p>
                    <p style={{ fontWeight: 'bold' }}>YOUR RESERVATION WILL NOT BE VALID WITHOUT THE PAYMENT!</p>
                    <div className="col-lg-6 class-input" >
                        <label style={{ marginLeft: '-20%', marginTop: '20px', width: '700px' }}>Payment method *</label>
                        <br />
                        <select class="form-select" style={{ width: '35%', marginLeft: '-20%', float: 'left' }} >
                            <option> <FontAwesomeIcon icon={faCashRegister}></FontAwesomeIcon> Cash</option>
                            <option>Baking</option>
                        </select>
                        <button style={{ color: "#fff" }} type="submit">Pay now</button>

                    </div>
                    <img src={''}/>
                    <div className="payment-infor-detail" >
                        <span>Reservation ID</span>
                        <a>R13016396</a>
                        <br/>
                        <span>Parking space</span>
                        <a>Zone 2</a>
                        <br/>
                        <span>Number of slot</span>
                        <a>1</a>
                        <br/>
                        <span>Duration</span>
                        <a>Friday, 2023-02-24 09:00 - 22:00 (13 hours)</a>
                        <br/>
                        <span>Created</span>
                        <a>2023-02-12 05:32</a>
                        <br/>
                        <span>Status</span>
                        <a>Not completed</a>
                        <br/>
                        <span>Price</span>
                        <a>10.40</a>
                        <br/>
                        <span>Payments</span>
                        <a>Cash</a>

                    </div>

                </div>
            </form>

            <Footer></Footer>
        </div>
    )

}
export default PaymentInformation;