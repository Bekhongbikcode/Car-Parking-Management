import React from 'react';

const Popup = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';

  return (
    <div className={showHideClassName}>
      <section className='popup-main'>
        <button className='close' onClick={handleClose}>
          &times;
        </button>
        {children}
      </section>
    </div>
  );
};

export default Popup;
