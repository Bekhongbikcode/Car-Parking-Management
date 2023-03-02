import React, { useState, useEffect } from "react";
import { Container, Card, TextInput, Button, Toast } from "react-materialize";
import FooterAccount from './FooterAccount'
import HeaderAccount from './HeaderAccount'
import BodyLink from './BodyLinkAccount'

function ProfileSetting() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const obj = { firstName, lastName, email, phone }
        console.log(obj);
    };

    return (
        <div>

            <HeaderAccount />
            <BodyLink />
            <Container className="profile-setting">
                <Card>
                    <h3>Changing Information</h3>
                    <form onSubmit={handleSubmit}>
                        <TextInput id="TextInput-38" label="First Name" name="firstName" onChange={e => setFirstName(e.target.value)} />
                        <TextInput id="TextInput-39" label="Last Name" name="lastName" onChange={e => setLastName(e.target.value)} />
                        <TextInput email id="TextInput-41" label="Email address" validate name="email" onChange={e => setEmail(e.target.value)} />
                        <TextInput id="TextInput-42" label="Your Phone" name="phone" onChange={e => setPhone(e.target.value)} />

                        <Toast
                            options={{
                                html: 'Saves Changes Successfully'
                            }}
                            type="submit"

                        >
                            Saves Changes
                        </Toast>
                    </form>
                </Card>
            </Container>
            <FooterAccount />
        </div>
    )
}

export default ProfileSetting;