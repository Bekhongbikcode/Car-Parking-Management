import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider"
import Header from "./Header";
import Footer from "./Footer";

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const ReservationDetail = () => {
    const [startDate, setStartDate] = useState(sessionStorage.getItem("startDate"));
    const [endDate, setEndDate] = useState(sessionStorage.getItem("endDate"));
    const [startTime, setStartTime] = useState(sessionStorage.getItem("startTime"));
    const [endTime, setEndTime] = useState(sessionStorage.getItem("endTime"));
    const [zone, setZone] = useState(sessionStorage.getItem("zone"))
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false);
    const [phone, setPhone] = useState('')
    const [validPhone, setValidPhone] = useState(false);
    const [typeOfVehicle, setTypeOfVehicle] = useState('');
    const [slot, setSlot] = useState('');

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

    useEffect (() =>{
        setTypeOfVehicle(typeOfVehicle)
    }, [typeOfVehicle])

    useEffect (() =>{
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
        const obj = {startDate, endDate, startTime, endTime, zone, typeOfVehicle, slot, fullName, email, phone }
        if (IsValidate)
        console.log(obj);
        window.location.href = '/PaymentInformation'
    }



    return (
        <div>
            
            
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
            <div className="reservation-details">
                <h3 style={{ paddingBottom: '30px' }}>Reservation details</h3>
                <div className="row col-lg-6">
                    <div className="col-lg-6  class-input">
                        <label>Start date *</label>
                        <br />
                        <div>
                            <input type={'date'} placeholder="User Name" style={{ width: '100%', position: 'relative' }} onChange={(e) => setStartDate(e.target.value)} value={startDate} ></input>

                        </div>
                    </div>
                    <div className=" col-lg-6 class-input">
                        <label>End date *</label>
                        <br />
                        <div>
                            <input type={'date'} placeholder="User Name" style={{ width: '100%', position: 'relative' }} onChange={(e) => setEndDate(e.target.value)} value={endDate}  ></input>

                        </div>
                    </div>
                    <div className="col-lg-6 class-input">
                        <label>Start time *</label>
                        <br />
                        <select class="form-select" onChange={(e) => setStartTime(e.target.value)} value={startTime}>
                            <option>00:00</option>
                            <option>01:00</option>
                            <option>02:00</option>
                            <option>03:00</option>
                            <option>04:00</option>
                            <option>05:00</option>
                            <option>06:00</option>
                            <option>07:00</option>
                            <option>08:00</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>12:00</option>
                            <option>13:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                            <option>23:00</option>


                        </select>

                    </div>

                    <div className=" col-lg-6 class-input">
                        <label>End time *</label>
                        <br />
                        <select class="form-select" onChange={(e) => setEndTime(e.target.value)} value={endTime}>
                            <option>00:00</option>
                            <option>01:00</option>
                            <option>02:00</option>
                            <option>03:00</option>
                            <option>04:00</option>
                            <option>05:00</option>
                            <option>06:00</option>
                            <option>07:00</option>
                            <option>08:00</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>12:00</option>
                            <option>13:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                            <option>23:00</option>


                        </select>
                    </div>
                    <div className=" col-lg-6 class-input">
                        <label>Zone *</label>
                        <br />
                        <select class="form-select" onChange={(e) => setZone(e.target.value)} value={zone}>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>

                        </select>
                    </div>
                    <div className="col-lg-6 class-input">
                        <label>Type of vehicle *</label>
                        <br />
                        <select class="form-select" onChange={(e) => setTypeOfVehicle(e.target.value)}>
                            <option>Car</option>
                            <option>Moto</option>
                            <option>Bicycle</option>

                        </select>

                    </div>
                    <div className=" col-lg-6 class-input">
                        <label>Slot *</label>
                        <br />
                        <select class="form-select" onChange={(e) => setSlot(e.target.value)} >
                            <option>R1</option>
                            <option>R2</option>
                            <option>C</option>

                        </select>
                    </div>

                </div>
            </div>
            <div className="personal-details" style={{ marginTop: '20px' }}>
                <h3 style={{ paddingBottom: '30px' }}>Personal details</h3>
                <div className="row col-lg-6">
                    <div className="col-lg-6  class-input">
                        <label>Full name *</label>
                        <br />
                        <div>
                            <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setFullName(e.target.value)}  ></input>

                        </div>
                    </div>

                    <div className="col-lg-6  class-input">
                        <label>Email *</label>
                        <br />
                        <div>
                            <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setEmail(e.target.value)}  ></input>

                        </div>
                    </div>
                    <div className="col-lg-6  class-input">
                        <label>Phone *</label>
                        <br />
                        <div>
                            <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setPhone(e.target.value)}></input>

                        </div>
                    </div>
                    <div className="col-lg-6  class-input">
                        <label>Note</label>
                        <br />
                        <div>
                            <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }}  ></input>

                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="col-lg-6  class-input">
                        <button style={{ color: "#fff" }} type="submit">Save Reservation</button>
                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}
export default ReservationDetail;