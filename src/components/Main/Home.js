import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Header from "../Complement/Header";
import Footer from "../Complement/Footer";
import Slider from "../Complement/Slider";
import './Main.css'
import PopUpWarning from './PopUp/PopUpWarning';
import { url_api } from "../../API/api";

const URL_WARNING_C = url_api + '/expired/checkExpiredC/';
const URL_WARNING_R = url_api + '/expired/checkExpiredR/';

const Home = () => {
    const [zone, setZone] = useState('A');

    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    const [id, setId] = useState(sessionStorage.getItem('id'));
    const [role, setRole] = useState(sessionStorage.getItem('role'));
    const [URL_WARNING, set_URL_WARNING] = useState('')
    const [obj, setObj] = useState([]);

    const [showPopupWarning, setShowPopupWarning] = useState(false);
    const [open, setOpen] = useState(false);



    const togglePopupWarning = () => {

        setShowPopupWarning(!showPopupWarning);
    };



    useEffect(() => {
        if (role === 'C') {
            set_URL_WARNING(URL_WARNING_C + id);
            console.log(URL_WARNING_C + id)
        } else if (role === 'R') {
            set_URL_WARNING(URL_WARNING_R + id);
            console.log(URL_WARNING_R + id)
        }

        fetch(URL_WARNING, { headers: { "Content-Type": "application/json" } })
        .then(response => console.log(response))
        .then((data) => {
            setObj(data)
            console.log('data: ' + JSON.stringify(data))
            setOpen(true);
            console.log('chose 1: ' + open)
        })
        .catch(error => {
            // setOpen(false);
            console.log('chose 2: ' + open)
            console.error(error)
        })

        if(obj === undefined) setOpen(false)
        else setOpen(true)

    }, [URL_WARNING]);

    
    
    useEffect(() =>{
        if (open)
        togglePopupWarning();
        console.log(open)
    },[open])

    

    







    useEffect(() => {
        setZone(zone);

    }, [zone]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        sessionStorage.setItem("zone", zone);

        // window.location.href = '/Reservation';
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>EParking</title>
            </Helmet>
            <Header data={username}></Header>
            <Slider></Slider>

            {/* -----------------------------zone-area-homepage----------------------- */}
            <form onSubmit={handleSubmit}>

                <div className="row zone-area-homepage" >

                    <div className="card col-lg-4" style={{ marginLeft: '10%' }}>
                        <div className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                            </div>
                            <span>Zone A</span>
                        </div>
                        <div className="card-body">
                            <span>Content</span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                            </div>
                        </div>
                        <div className="card-footer">
                            <form onSubmit={handleSubmit}>

                                <Link to={'/ZoneDetail/A'}>

                                    <button style={{ color: "#fff", width: '25%' }}  ><span>Details</span></button>
                                </Link>
                                <Link to={'/Reservation'}>
                                    <button style={{ color: "#fff" }} onClick={e => setZone(e.target.value)} value='A'><span>Make Reservation</span></button>
                                </Link>
                            </form>
                        </div>
                    </div>


                    <div className="card col-lg-4">
                        <div className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                            </div>
                            <span>Zone B</span>
                        </div>
                        <div className="card-body">
                            <span>Content</span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                            </div>
                        </div>
                        <div className="card-footer">
                            <form onSubmit={handleSubmit}>

                            </form>

                            <Link to={'/ZoneDetail/B'}>

                                <button style={{ color: "#fff", width: '25%' }} onClick={() => setZone('B')} value="B"><span>Details</span></button>
                            </Link>
                            <Link to={'/Reservation'}>
                                <button style={{ color: "#fff" }} onClick={e => setZone(e.target.value)} value='B'><span>Make Reservation</span></button>
                            </Link>
                        </div>
                    </div>


                    <div className="card col-lg-4">
                        <div className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                            </div>
                            <span>Zone C</span>
                        </div>
                        <div className="card-body">
                            <span>Content</span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                            </div>
                        </div>
                        <div className="card-footer">
                            <form onSubmit={handleSubmit}>

                            </form>
                            <Link to={'/ZoneDetail/C'}>

                                <button style={{ color: "#fff", width: '25%' }} onClick={() => setZone('C')} value="C"><span>Details</span></button>
                            </Link>
                            <Link to={'/Reservation'}>
                                <button style={{ color: "#fff" }} onClick={e => setZone(e.target.value)} value='C'><span>Make Reservation</span></button>
                            </Link>
                        </div>
                    </div>

                    {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                    <div class=" row barrier-homepage" >

                        <div class=" col-lg-6" style={{ marginLeft: '10%' }}>
                            <h2>
                                Entry/barrier system & QR code
                            </h2>
                            <span>
                                <h5 style={{ display: 'block', marginBottom: '30px' }}>You can integrate planyo with any automated entry system. Check out our already existing integration with Spartime.</h5>

                                <h5>Your staff can use our mobile app and read the QR code upon entry for speeding up the arrivals.</h5>
                            </span>

                        </div>

                        <div class="col-lg-6 img-gate-homepage">
                            <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                        </div>



                    </div>

                    {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                    <div class=" row barrier-homepage" >

                        <div class="col-lg-6 img-gate-homepage" style={{ marginLeft: '10%' }}>
                            <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                        </div>

                        <div class=" col-lg-6" >
                            <h2>
                                Entry/barrier system & QR code
                            </h2>
                            <span>
                                <h5 style={{ display: 'block', marginBottom: '30px' }}>You can integrate planyo with any automated entry system. Check out our already existing integration with Spartime.</h5>

                                <h5>Your staff can use our mobile app and read the QR code upon entry for speeding up the arrivals.</h5>
                            </span>
                        </div>

                    </div>

                </div>

            </form>

            <Footer></Footer>

            <PopUpWarning handleClose={togglePopupWarning} show={showPopupWarning}>

            </PopUpWarning>


        </HelmetProvider>
    );
}

export default Home;



