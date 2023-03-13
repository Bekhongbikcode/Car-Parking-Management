import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import {faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Main.css'



const PopUpWarning = ({ handleClose, show, data, role }) => {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';

  return (
    <div className={showHideClassName}>
      <section className='popup-main popup-main-custom'>
        <button className='close' onClick={handleClose}>
          &times;
        </button>
        <div className="home-warning">
          <div className="header-home-warning">
            <FontAwesomeIcon className="icon-header-home-warning" icon={faWarning}></FontAwesomeIcon>
            <span>Warning expired!</span>
          </div>




         

        </div>
      </section>
    </div>
  );
};

export default PopUpWarning;
