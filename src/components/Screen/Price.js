import React, { useState, useEffect, useRef, useCallback } from "react";
import Slider from "../Complement/Slider"
import Header from "../Complement/Header";
import Footer from "../Complement/Footer";
const Price = () =>{
    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    return(
        <>
            <Header data={username}></Header>
            <Slider></Slider>
            <Footer></Footer>
        </>
    )
}

export default Price;