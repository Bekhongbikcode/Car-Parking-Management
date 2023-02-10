import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider"
import Header from "./Header";
import Footer from "./Footer";
const Reservation = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <h2 style={{ textAlign: 'center', paddingTop: '30px', color: '#BA3925' }}>Processing...</h2>
            <div class="step-reservation container d-flex align-items-center justify-content-center">
                <div className="circle">
                    <div class="col-lg-3 rounded-circle"><span>1</span></div>
                    <h6 style={{display:'block', width:'80px', textAlign:'center', marginLeft:'10px'}}>Reservation Details</h6>
                </div>
                <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faArrowRight}></FontAwesomeIcon>
                <div className="circle">
                    <div class="col-lg-3 rounded-circle"><span>1</span></div>
                    <h6 style={{display:'block', width:'80px', textAlign:'center', marginLeft:'10px'}}>Reservation Details</h6>
                </div>
                <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faArrowRight}></FontAwesomeIcon>
                <div className="circle">
                    <div class="col-lg-3 rounded-circle"><span>1</span></div>
                    <h6 style={{display:'block', width:'80px', textAlign:'center', marginLeft:'10px'}}>Reservation Details</h6>
                </div>
                <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faArrowRight}></FontAwesomeIcon>
                <div className="circle">
                    <div class="col-lg-3 rounded-circle"><span>1</span></div>
                    <h6 style={{display:'block', width:'80px', textAlign:'center', marginLeft:'10px'}}>Reservation Details</h6>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}
export default Reservation;