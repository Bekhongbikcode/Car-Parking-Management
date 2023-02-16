import { Component, version } from "react";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Banking = () => {
    const [name, setName] = useState('');
    const [cardNum, setcardNum] = useState('');
    const [expiry, setExpiry] = useState('');
    const [verification, setVerification] = useState('');

    useEffect(() => {
        setName(name);
    }, [name]);

    useEffect(() => {
        setcardNum(cardNum);
    }, [cardNum]);

    useEffect(() => {
        setExpiry(expiry);
    }, [expiry]);

    useEffect(() => {
        setVerification(verification);
    }, [version]);

    const handleSubmit = () => {
        window.location.href = '/ReservationComplete'
    }



    return (
        <HelmetProvider>
            <Helmet>
                <title>Banking Gate</title>
            </Helmet>

            <div className="header-banking-gate">
                <div>
                    Test GateWay
                </div>
                <p style={{ paddingTop: '110px', fontSize: '30px' }}>
                    Enter Credit Card Details
                </p>
            </div>

            <div style={{ position: 'absolute', left: 150, top: '350px' }}>
                <p style={{ fontSize: '50px', color: 'black' }}>EParking Payment - Zone A </p>
            </div>

            <div className=" col-lg-6 input-creadit-card">
                <div className="col-lg-6  class-input">
                    <label>Your Name *</label>
                    <br />
                    <div>
                        <input type={'text'} placeholder="Nguyen Van A" style={{ width: '100%', position: 'relative' }} ></input>

                    </div>
                </div>

                <div className="col-lg-6  class-input">
                    <label>Card number *</label>
                    <br />
                    <div>
                        <input type={'text'} placeholder="0000 2222 3333 4444" style={{ width: '100%', position: 'relative' }} ></input>

                    </div>
                </div>

                <div className="col-lg-6  class-input">
                    <label>Expiry *</label>
                    <br />
                    <div>
                        <input type={'text'} placeholder="05/17" style={{ width: '100%', position: 'relative' }} ></input>

                    </div>
                </div>

                <div className="col-lg-6  class-input">
                    <label>Card verification number *</label>
                    <br />
                    <div>
                        <input type={'text'} placeholder="425" style={{ width: '100%', position: 'relative' }} ></input>

                    </div>
                </div>

                <form onSubmit={handleSubmit} className="col-lg-6  class-input">

                    <div>
                        <Link to={'/ReservationComplete'}> 
                            <button type={'submit'} style={{ width: '100%', height: '50px', borderRadius: '5px', backgroundColor: '#2DC98A', border: '#2DC98A' }} >Submit</button>
                        </Link>

                    </div>
                </form>

            </div>

        </HelmetProvider>
    );
};

export default Banking;
