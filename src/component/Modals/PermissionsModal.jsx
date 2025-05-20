import React from 'react';
import { Modal, Button } from "react-bootstrap";
import "./Modal.css";
import { MdErrorOutline } from 'react-icons/md';

const PermissionsModal = ({ showPermissionModal, handleClosedata , HeaderMessage , permissionMessage }) => {
  return (
     <Modal show={showPermissionModal} onHide={handleClosedata} centered>
            <Modal.Header closeButton>
              <Modal.Title>{HeaderMessage} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex align-items-center flex-column">
                <MdErrorOutline className="text-danger m-3" size={50} />
                <p className="mb-0 ">{permissionMessage}</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" 
              onClick={handleClosedata}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
    
  )
}


export default PermissionsModal