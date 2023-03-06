import React, { useState } from "react";
import { Container, Card, Toast, FormText } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeaderAccount from './HeaderAccount';
import BodyLink from './BodyLink';
import FooterAccount from './FooterAccount';

const EMAIL_CHECK = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_CHECK = /^[0-9]{10,12}$/;

function ProfileSetting() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const validateChecking = () => {

        let result = true;
        if (firstName === '' || firstName === null) {
            result = false;
            toast.error('Please Enter Username');
        }
        if (lastName === '' || lastName === null) {
            result = false;
            toast.error('Please Enter Password');
        }
        if (email === '' || email === null) {
            result = false;
            toast.error('Please Enter Email Address');
        }
        if (phone === '' || phone === null) {
            result = false;
            toast.error('Please Enter Phone Number');
        }else
        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = 1; //  đang bị fix cứng nè :)))
        const obj = { firstName, lastName, email, phone };
        console.log(obj);
        if (validateChecking()) {
            fetch(`http://localhost:3000/newaccount/${userId}`, {
                method: 'PUT',
                headers: {
                    "Access-Control-Allow-Origin": 'http://localhost:3000/account',
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(obj),
                mode: 'cors'
            }).then((res) => {
                console.log(obj)
                sessionStorage.setItem("obj", JSON.stringify(obj));
                // window.location.href = '/profilesetting'
                toast.success('Successfully')
                console.log(res);
            }).catch((err) => {
                toast.error(err.message)
            });
        };
    }

    return (
        <div>
            <HeaderAccount />

            <div style={{ display: "flex", marginTop: "5%", marginBottom: "10%" }}>
                <BodyLink />
                <Container className="profile-setting">
                    <Card>
                        <h3 style={{ textAlign: "center", marginTop: "5%" }}>Changing Information</h3>
                        <form onSubmit={handleSubmit} style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Input First Name" onChange={(e) => setFirstName(e.target.value)} />
                                <label for="floatingInput">First Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Input Last Name" onChange={(e) => setLastName(e.target.value)} />
                                <label for="floatingInput">Last Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="Input Email" onChange={(e) => setEmail(e.target.value)} />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Input Phone" onChange={(e) => setPhone(e.target.value)} />
                                <label for="floatingInput">Phone</label>
                            </div>
                            <div>
                                <button type="submit" style={{ backgroundColor: "#2DC98A", color: "white", border: "none", borderRadius: "10%", padding: "10px 20px", marginBottom: "10px", marginLeft: "50%" }}>Saves</button>
                                <ToastContainer />
                            </div>
                        </form>

                    </Card>
                </Container>
            </div>
            <FooterAccount />
        </div>
    )
}

export default ProfileSetting;