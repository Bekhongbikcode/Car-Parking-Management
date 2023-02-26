import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Payment.css'

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const ReservationDetail = () => {
    const [startDate, setStartDate] = useState(sessionStorage.getItem("startDate"));
    const [endDate, setEndDate] = useState(sessionStorage.getItem("endDate"));
    const [startTime, setStartTime] = useState(sessionStorage.getItem("startTime"));
    const [endTime, setEndTime] = useState(sessionStorage.getItem("endTime"));
    const [zone, setZone] = useState('A')
    const [fullName, setFullName] = useState(sessionStorage.getItem("fullname"));
    const [email, setEmail] = useState(sessionStorage.getItem("email"))
    const [validEmail, setValidEmail] = useState(false);
    const [phone, setPhone] = useState(sessionStorage.getItem("phone"))
    const [validPhone, setValidPhone] = useState(false);
    const [typeOfVehicle, setTypeOfVehicle] = useState('Moto');
    const [slot, setSlot] = useState('');
    const [shells, setShells] = useState([]);

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
        console.log(zone)
    }, [zone]);

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

  

    useEffect(() => {
        // if (zone === 'A') {
            console.log(zone)
            fetch('https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/present_slot/findAll/'+zone)
                .then(response => response.json())
                .then((data) => {
                    setShells(data)
                    console.log(data)
                })
                .catch(error => console.error(error));
    }, [zone]);

    const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));
    console.log(customerSlot);

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
        const id_Building = zone;
        const type_Of_Vehicle = typeOfVehicle;
        const id_C_Slot = slot;
        const fullname = fullName;
        const idUser = sessionStorage.getItem("id");
        const obj = { idUser, startDate, endDate, startTime, endTime, id_Building, type_Of_Vehicle, id_C_Slot, fullname, email, phone }

        fetch('https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/bookingCustomer/save', {
            method: 'POST',
            header: {

                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",

            },
            body: JSON.stringify(obj)
        }).then((res) => {
            console.log(obj)
            sessionStorage.setItem("obj", JSON.stringify(obj));
            const currentDate = new Date(Date.now());
            const formattedDate = currentDate.toISOString().substr(0, 10);
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const currentTime = `${hours}:${minutes}:${seconds}`;
            sessionStorage.setItem("datebook", formattedDate);
            sessionStorage.setItem("timebook", currentTime);
            window.location.href = '/PaymentInformation'
            console.log(res);

        }).catch((err) => {
            console.log(err.massage())
        });
    }


    return (
        <div>


            <h2 style={{ textAlign: 'center', paddingTop: '30px', color: '#BA3925' }}>Processing...</h2>
            <div className="step-reservation container d-flex align-items-center justify-content-center">

                <div className="circle">
                    <div className="col-lg-3 rounded-circle" style={{ backgroundColor: 'black' }}><span>1</span></div>
                    <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Details</h6>
                </div>

                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                <Link style={{ textDecoration: 'none' }} to={'/PaymentInformation'}>
                    <div className="circle">
                        <div className="col-lg-3 rounded-circle"><span>2</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Payment Accuracy</h6>
                    </div>
                </Link>
                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                <Link style={{ textDecoration: 'none' }} to={'/ReservationComplete'}>
                    <div className="circle">
                        <div className="col-lg-3 rounded-circle" ><span>3</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Completed</h6>
                    </div>
                </Link>
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
                        <select className="form-select" onChange={(e) => setStartTime(e.target.value)} value={startTime}>
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
                        <select className="form-select" onChange={(e) => setEndTime(e.target.value)} value={endTime}>
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
                        <select className="form-select" onChange={(e) => setZone(e.target.value)} value={zone} >
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className="col-lg-6 class-input">
                        <label>Type of vehicle *</label>
                        <br />
                        <select className="form-select" onChange={(e) => setTypeOfVehicle(e.target.value)}>
                            <option>Car</option>
                            <option>Moto</option>
                            <option>Bicycle</option>
                        </select>
                    </div>
                    <div className=" col-lg-6 class-input">
                        <label>Slot *</label>
                        <br />
                        <select className="form-select" onChange={(e) => setSlot(e.target.value)} >
                            {customerSlot.map(shell => {
                                if (shell.status_Slots == false) {
                                    
                                    return <option>{shell.id_slot}</option>
                                }
                            })}


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
                            <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setFullName(e.target.value)} value={fullName}  ></input>

                        </div>
                    </div>

                    <div className="col-lg-6  class-input">
                        <label>Email *</label>
                        <br />
                        <div>
                            <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setEmail(e.target.value)} value={email} ></input>

                        </div>
                    </div>
                    <div className="col-lg-6  class-input">
                        <label>Phone *</label>
                        <br />
                        <div>
                            <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setPhone(e.target.value)} value={phone}></input>

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

            <div className="table-responsive  align-items-center justify-content-center zone-reservation">
                <h5>AVAILABILITY</h5>
                <div style={{ marginTop: '50px' }}>Resident Area</div>
                <table className="table border">
                    <tbody>
                        <tr class="border">

                            {residentSlot.slice(1, 10).map(shell => (
                                <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                        <tr class="border">

                            {residentSlot.slice(10, 20).map(shell => (
                                <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                        
                    </tbody>

                </table>
                <div>Customer Area</div>
                <table class="table border">
                    <tbody>
                        <tr class="border">

                            {customerSlot.slice(0, 10).map(shell => (
                                <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                        <tr class="border">

                            {customerSlot.slice(10, 20).map(shell => (
                                <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                    {shell.id_slot}
                                </td>
                            ))}
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )

}
export default ReservationDetail;