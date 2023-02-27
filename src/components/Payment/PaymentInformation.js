import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import visa from "D:/WorkSpace/React_projects/SWP/ParkingManagement/public/assets/img/visa"
import { faCheck, faTimes, faInfoCircle, faUser, faClock, faArrowRight, faCashRegister, } from "@fortawesome/free-solid-svg-icons";
import Slider from "../Complement/Slider"
import Header from "../Complement/Header";
import Footer from "../Complement/Footer";
import ReservationDetail from "./ReservationDetail";
import './Payment.css'

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const PaymentInformation = () => {
    const reservation = JSON.parse(sessionStorage.getItem("reservation"));
    const obj = JSON.parse(sessionStorage.getItem("obj"));
    const [bookingInf, setBookingInf] = useState([]);
    const [type, setType] = useState('Banking');
    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    

    useEffect(() => {
        setType(type);
    }, [type]);

    useEffect(() => {
        fetch('https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/bookingCustomer/findBooking')
            .then(response => response.json())
            .then((data) => {
                setBookingInf(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(bookingInf.id_Booking);
        console.log(type)
        sessionStorage.setItem("idbooking", bookingInf.id_Booking);
        sessionStorage.setItem("typePayment", type);
        sessionStorage.setItem("idbuilding", bookingInf.id_Building);
        window.location.href = '/Banking'
    }

    const toComplete = async(e) => {
        e.preventDefault();
        //type of payment vs idbooking
        const id_Booking = bookingInf.id_Booking;
        const type_Of_Payment = bookingInf.type;
        const id_Building = bookingInf.id_Building;
        
        const regObj = { id_Booking, type_Of_Payment, id_Building }
        fetch('https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/paymentCustomer/save', {

            method: 'POST',
            header: {
                "Accept": "*/*",
                "Content-Type": "application/text",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

            body: JSON.stringify(regObj)


        }).then((res) => {
            console.log(JSON.stringify(regObj));
            console.log(JSON.stringify(regObj))
            console.log(res);
            
            const currentDate = new Date(Date.now());
            const formattedDate = currentDate.toISOString().substr(0, 10);
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const currentTime = `${hours}:${minutes}:${seconds}`;
            sessionStorage.setItem("datebook", formattedDate);
            sessionStorage.setItem("timebook", currentTime)
            window.location.href = '/ReservationComplete'
            
        }).catch((err) => {
            toast.error('Failed: ' + err.message);
        });
    }

    return (
        <div>
            <Header data={username}></Header>
            <Slider></Slider>

            <h2 style={{ textAlign: 'center', paddingTop: '30px', color: '#BA3925' }}>Processing...</h2>
            <div className="step-reservation container d-flex align-items-center justify-content-center">
                <Link style={{ textDecoration: 'none' }} to={'/Reservation'}>
                    <div className="circle">
                        <div className="col-lg-3 rounded-circle" ><span>1</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Details</h6>
                    </div>
                </Link>

                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>

                <div className="circle">
                    <div className="col-lg-3 rounded-circle" style={{ backgroundColor: 'black' }}><span>2</span></div>
                    <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Payment Accuracy</h6>
                </div>

                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>

                <Link style={{ textDecoration: 'none' }} to={'/ReservationComplete'}>
                    <div className="circle">
                        <div className="col-lg-3 rounded-circle" ><span>3</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Completed</h6>
                    </div>
                </Link>
            </div>


            <div style={{ color: 'black' }} className="payment-infor">
                <p style={{ fontWeight: 'bold' }}>Your reservation ID is: { }</p>
                <p style={{ width: '500px' }}>In order to complete your reservation, you will need to make an online payment. Click the button below to go to a secure payment site.</p>
                <p style={{ fontWeight: 'bold' }}>YOUR RESERVATION WILL NOT BE VALID WITHOUT THE PAYMENT!</p>
                <div className="col-lg-6 class-input" >

                    <label style={{ marginLeft: '-20%', marginTop: '20px', width: '700px' }}>Payment method *</label>
                    <br />

                    <select className="form-select" style={{ width: '35%', marginLeft: '-20%', float: 'left' }} onChange={e => setType(e.target.value)} value={type} >
                        <option> <FontAwesomeIcon icon={faCashRegister}></FontAwesomeIcon> Cash</option>
                        <option>Banking</option>
                    </select>

                
                        
                            <form onSubmit={handleSubmit}>
                                <button style={{ color: "#fff" }} type="submit">Pay now</button>
                            </form>
                        
                        
                        
                            

                </div>
                <img src={''} />
                <div className="payment-infor-detail" >
                    <span>Reservation ID</span>
                    <i>{bookingInf.id_Booking}</i>
                    <br />
                    <span>Full name</span>
                    <i>{bookingInf.fullname}</i>
                    <br />
                    <span>Email</span>
                    <i>{bookingInf.email}</i>
                    <br />
                    <span>Phone</span>
                    <i>{bookingInf.phone}</i>
                    <br />
                    <span>Type of vehicle</span>
                    <i>{bookingInf.type_Of_Vehicle}</i>
                    <br />
                    <span>Parking Zone</span>
                    <i>{obj.id_Building}</i>
                    <br />
                    <span>Slot</span>
                    <i>{obj.id_C_Slot}</i>
                    <br />
                    <span>Duration</span>
                    <i>{obj.startDate}, {obj.endDate}, {obj.startTime}, {obj.endTime}</i>
                    <br />
                    <span>Created</span>
                    <i>{sessionStorage.getItem("datebook")}, {sessionStorage.getItem("timebook")}</i>
                    <br />
                    <span>Status</span>
                    <i>Not completed</i>
                    <br />
                    <span>Price</span>
                    <i>{obj.total_Of_Money}</i>
                    <br />


                </div>

            </div>


            <Footer></Footer>
        </div>
    )

}
export default PaymentInformation;