import React from 'react';
import '../ModalForm/modalForm.css';

function ModalForm() {
  return (
    <>
      <div className="header">
        <h3 className="text">Simple Flight Check</h3>
      </div>
      <form className="modalForm">
        <div className="input-container">
          <label htmlFor="message">Пароль</label>
          <input type="text" className="input-passport" />
        </div>
        <div className="input-container">
          <input type="email" className="input-email" />
        </div>
      </form>
    </>
  );
}

export default ModalForm;
