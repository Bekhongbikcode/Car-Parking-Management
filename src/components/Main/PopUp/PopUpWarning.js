import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
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

          <div className="body-home-warning">
            <p>
              This serves as a warning that failure to make payment in a timely manner may result in further action being taken.
            </p>
            <p>
              We understand that unexpected circumstances can arise which may affect your ability to pay on time.
            </p>
            <p>
              Please take this warning seriously and ensure that all outstanding payments are made as soon as possible to avoid any further complications.
            </p>
          </div>





        </div>
      </section>
    </div>
  );
};

export default PopUpWarning;
