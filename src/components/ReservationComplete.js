import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import visa from "D:/WorkSpace/React_projects/SWP/ParkingManagement/public/assets/img/visa"
import { faCheck, faTimes, faInfoCircle, faUser, faClock, faArrowRight, faCashRegister, } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider"
import Header from "./Header";
import Footer from "./Footer";

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const ReservationComplete = () => {
    const [startDate, setStartDate] = useState(sessionStorage.getItem("startDate"));
    const [endDate, setEndDate] = useState(sessionStorage.getItem("endDate"));
    const [startTime, setStartTime] = useState(sessionStorage.getItem("startTime"));
    const [endTime, setEndTime] = useState(sessionStorage.getItem("endTime"));
    const [zone, setZone] = useState(sessionStorage.getItem("B"))
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false);
    const [phone, setPhone] = useState('')
    const [validPhone, setValidPhone] = useState(false);
    const [typeOfVehicle, setTypeOfVehicle] = useState('Moto');
    const [slot, setSlot] = useState('R2');

    useEffect(() => {
        setStartDate(startDate);

    }, [startDate]);

    useEffect(() => {
        setEndDate(endDate);
    }, [endDate]);

    useEffect(() => {
        setStartTime(startTime);
    }, [startTime]);

    useEffect(() => {
        setEndTime(endTime);
    }, [endDate]);

    useEffect(() => {
        setZone(zone);
    }, [zone])

    useEffect(() => {
        setFullName(fullName)

    }, [fullName]);


    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PHONE_REGEX.test(phone);
        setValidPhone(result);
    })

    useEffect(() => {
        setTypeOfVehicle(typeOfVehicle)
    }, [typeOfVehicle])

    useEffect(() => {
        setSlot(slot)
    }, [slot])


    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the valid value!';

        if (!PHONE_REGEX.test(phone)) {
            isproceed = false;
            errormessage = 'Phone must be 10-12 numbers.';
        }

        if (!EMAIL_REGEX.test(email)) {
            isproceed = false;
            errormessage = 'Please enter the valid email!';

        }



        if (!isproceed) {
            toast.warning(errormessage)
        } else
            return isproceed;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = { startDate, endDate, startTime, endTime, zone, typeOfVehicle, slot, fullName, email, phone }
        if (IsValidate) {
            console.log(JSON.stringify(obj));
            sessionStorage.setItem("reservation", JSON.stringify(obj));
            window.location.href = '/PaymentInformation';

            sessionStorage.setItem("page", "recomplete");
            window.location.href = '/Reservation';

        }
    }



    return (
        <div>
            <Header></Header>
            <Slider></Slider>

            <h2 style={{ textAlign: 'center', paddingTop: '30px', color: 'Green' }}>Completed</h2>
            <div class="step-reservation container d-flex align-items-center justify-content-center">
                <Link style={{textDecoration: 'none'}} to={'/Reservation'}>
                    <div className="circle">
                        <div class="col-lg-3 rounded-circle"><span  style={{textDecoration:'none'}}>1</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px', textDecoration:'none' }}>Reservation Details</h6>
                    </div>
                </Link>
                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                <Link style={{textDecoration: 'none'}} to={'/PaymentInformation'}>
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
                    <span>Reservation ID</span>
                    <a>R13016396</a>
                    <br />
                    <span>Parking space</span>
                    <a>R13016396</a>
                    <br />
                    <span>Number of slot</span>
                    <a>R13016396</a>
                    <br />
                    <span>Duration</span>
                    <a>R13016396</a>
                    <br />
                    <span>Created</span>
                    <a>R13016396</a>
                    <br />
                    <span>Status</span>
                    <a>Not completed</a>
                    <br />
                    <span>Price</span>
                    <a>10.40</a>
                    <br />
                    <span>Payments</span>
                    <a>Cash</a>

                </div>

            </div>





            <Footer></Footer>
        </div>
    )

}
export default ReservationComplete;