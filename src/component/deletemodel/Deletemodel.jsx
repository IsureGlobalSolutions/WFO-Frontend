import React from 'react';
import { Modal } from "react-bootstrap";
import { ReactComponent as Deleticon } from '../../assets/WfoAssets/SVG/DeleteMobal.svg'; 
import "./Deletemodal.css";

const Deletemodel = ({ show, handleClosedata, conformDelete, message }) => {
  return (
    <Modal show={show} onHide={handleClosedata} centered>
      <Modal.Body className="p-0 m-0 modal-body-custom" style={{ borderRadius: "30px" }}>
        <button 
          type="button" 
          className="btn-close p-3" 
          aria-label="Close" 
          style={{ position: 'absolute', top: '0', right: '0' }} 
          onClick={handleClosedata}
        ></button>
        
        <div className='d-flex justify-content-center align-items-center flex-column gap-3 p-4 ps-5 pe-5'>
          <div className='mt-2'>
            <Deleticon/>
          </div>
          <div className='mt-2'>
            <p className="delete-title">Delete Note</p>
          </div>
        </div>
        
        <div className='modal-footer-custom p-4'>
          <div className="message-text">
            {message}
          </div>
          <div className="button-container">
            <button type="button" className="cancel-button-modal"           onClick={handleClosedata}
            >Cancel</button>
            <button type="button" className="delete-button-modal ms-2" onClick={conformDelete}>Delete</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Deletemodel;