
import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";

const URL = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/present_slot/findAll/';
const URL_Search_Res = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/user/findById?id=';
const URL_Book = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/residentslot/saveResidentSlot'
const URL_Infor_R_Slot = 'https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/security/ResponseResidentInfoSlot?id_Building='


const PopupInforSlot = ({ handleClose, show, data }) => {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';
 
  return (
    <div className={showHideClassName}>
      <section className='popup-main'  >
        <button className='close' onClick={handleClose}>
          &times;
        </button>
        <div>
        <h3 style={{textAlign:'center'}}>Slot information:</h3>
                <div className="form-infor-slot" >
                    <span>Resident ID:</span>
                    <i>{data.id_Resident}</i>
                    <br />
                    <span>Payment ID:</span>
                    <i>{data.id_Payment}</i>
                    <br />
                    <span>Invoice ID:</span>
                    <i>{data.id_Invoice}</i>
                    <br />
                    <span>Type of payment:</span>
                    <i>{data.typeOfPayment}</i>
                    <br />
                    <span>Type of vehicle:</span>
                    <i>{data.typeOfVehicle}</i>
                    <br />
                    <span>Date:</span>
                    <i>{data.dateOfPayment}</i>



                </div>
               
        </div>
      </section>
    </div>
  );
};

export default PopupInforSlot;
