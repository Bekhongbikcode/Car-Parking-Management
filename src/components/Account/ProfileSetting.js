import React, { useState, useEffect } from "react";
import { Container, Card, TextInput, Button, Toast } from "react-materialize";
import FooterAccount from "../../../../Account/account/src/components/Account/FooterAccount";
import HeaderAccount from "../../../../Account/account/src/components/Account/HeaderAccount";
import BodyLink from '../../../../Account/account/src/components/Account/BodyLinkAccount';
function ProfileSetting() {
   
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form values:', formValues);
    };

    return (
        <Container className="profile-setting">
            <HeaderAccount/>
            <BodyLink/>
            <Card>
                <h3>Changing Information</h3>
                <form onSubmit={handleSubmit}>
                    <TextInput id="TextInput-38" label="First Name" name="firstName" onChange={handleInputChange} />
                    <TextInput id="TextInput-39" label="Last Name" name="lastName" onChange={handleInputChange} />
                    <TextInput email id="TextInput-41" label="Email address" validate name="email" onChange={handleInputChange}/>
                    <TextInput id="TextInput-42" label="Your Phone" name="phone" onChange={handleInputChange}/>

                    <Toast
                        options={{
                            html: 'Saves Changes Successfully'
                        }}
                        type="submit"

                    >
                        Saves Changes
                    </Toast>
                    {/* <button onClick={handleClick}>click</button> */}
                </form>
            </Card>
            <FooterAccount/>
        </Container>
    )
}

export default ProfileSetting;