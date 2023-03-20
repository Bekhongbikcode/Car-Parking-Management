import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Carousel, Card, Stack, Button } from "react-bootstrap";
import Header from "../Complement/Header";
import Footer from "../Complement/Footer";
import Slider from "../Complement/Slider";
import './Main.css'
import PopUpWarning from './PopUp/PopUpWarning';
import { url_api } from "../../API/api";

const URL_WARNING_C = url_api + '/expired/checkExpiredC/';
const URL_WARNING_R = url_api + '/expired/checkExpiredR/';

const Home = () => {
    const reviews = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },

    ];

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
        const currentDate = new Date(Date.now());
        const formattedDate = currentDate.toISOString().substr(0, 10);
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours}a${minutes}a${seconds}`;
        if (role === 'C') {
            set_URL_WARNING(URL_WARNING_C + id + '?time=' + currentTime);
            console.log(URL_WARNING_C + id + '?time=' + currentTime)
        } else if (role === 'R') {
            set_URL_WARNING(URL_WARNING_R + id + '?time=' + currentTime);
            console.log(URL_WARNING_R + id + '?time=' + currentTime)
        }

        fetch(URL_WARNING, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": URL_WARNING,
                Accept: "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

        })
            .then((res) => res.json())
            .then((data) => {
                
                setObj(data);
                console.log('data: ' + data)
                setOpen(true)
            })
            .catch((err) => {
                console.error(err);
                
            });

        if (obj === undefined) setOpen(false)
        else setOpen(true)

    }, [URL_WARNING]);
    console.log('data: ' + obj.id_user)



    // useEffect(() => {
    //     if (obj='' || obj === null)
    //         togglePopupWarning();
        
    // }, [obj])











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
                    <Card className="card col-lg-4" style={{ marginLeft: '10%' }}>
                        <Card.Header className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                            </div>
                            <span>Zone A</span>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <span>Content</span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <form onSubmit={handleSubmit}>

                                <Link to={'/ZoneDetail/A'}>

                                    <Button style={{ color: "#fff", width: '30.8%' }}  ><span>Details</span></Button>
                                </Link>
                                <Link to={'/Reservation'}>
                                    <Button style={{ color: "#fff" }} onClick={e => setZone(e.target.value)} value='A'><span>Make Reservation</span></Button>
                                </Link>
                            </form>
                        </Card.Footer>
                    </Card>


                    <Card className="card col-lg-4">
                        <Card.Header className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                            </div>
                            <span>Zone B</span>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <span>Content</span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <form onSubmit={handleSubmit}>

                            </form>

                            <Link to={'/ZoneDetail/B'}>

                                <Button style={{ color: "#fff", width: '30.8%' }} onClick={() => setZone('B')} value="B"><span>Details</span></Button>
                            </Link>
                            <Link to={'/Reservation'}>
                                <Button style={{ color: "#fff" }} onClick={e => setZone(e.target.value)} value='B'><span>Make Reservation</span></Button>
                            </Link>
                        </Card.Footer>
                    </Card>


                    <Card className="card col-lg-4">
                        <Card.Header className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                            </div>
                            <span>Zone C</span>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <span>Content</span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <form onSubmit={handleSubmit}>

                            </form>
                            <Link to={'/ZoneDetail/C'}>

                                <Button style={{ color: "#fff", width: '30.8%' }} onClick={() => setZone('C')} value="C"><span>Details</span></Button>
                            </Link>
                            <Link to={'/Reservation'}>
                                <Button style={{ color: "#fff" }} onClick={e => setZone(e.target.value)} value='C'><span>Make Reservation</span></Button>
                            </Link>
                        </Card.Footer>
                    </Card>

                    {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                    <div class=" row barrier-homepage" >
                        <div class=" col-lg-6 msg" style={{ marginLeft: '10%' }}>
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

                        <div class=" col-lg-6 msg" >
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


                {/* ------------------SLIDER-------------------------- */}
                <div>
                    <h1 className="text-center fw-bold my-3">
                        User Reviews ({reviews.length})
                    </h1>
                    <div className="bg-light container-fluid" style={{ backgroundColor: 'white' }}>
                        <Carousel style={{ height: 300 }}>
                            {reviews.map((review, index) => (
                                <Carousel.Item style={{ height: 300, color: 'black' }} className='recard'>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center "

                                        gap={2}
                                    >
                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body >
                                                <Card.Title style={{ color: "black" }}>Card Title</Card.Title>
                                                <Card.Text style={{ color: "black" }}>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </Card.Text>
                                                <Button style={{ width: '80%', height: '38px' }} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Title style={{ color: "black" }}>Card Title</Card.Title>
                                                <Card.Text style={{ color: "black" }}>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </Card.Text>
                                                <Button style={{ width: '80%', height: '38px' }} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Title style={{ color: "black" }}>Card Title</Card.Title>
                                                <Card.Text style={{ color: "black" }}>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </Card.Text>
                                                <Button style={{ width: '80%', height: '38px' }} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>
                            ))}
                        </Carousel>
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



