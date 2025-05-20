

import React, { useState , useEffect, useContext } from 'react';
import {getSubDepartment , addEditEmplyeetype, getEmployetypeData } from '../../../redux/features/auth/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import Stickyheader from '../../upperheader/Stickyheader';
// import '../adminscreens.css'
import { MdErrorOutline } from "react-icons/md";
import Employeelist from './Employeelist';
import AuthContext from '../../../context/AuthProvider';
import PermissionsModal from '../../Modals/PermissionsModal';

const Employtype = ({selectedModule}) => {
    const dispatch = useDispatch();
    const { permissions } = useContext(AuthContext);
  
  // Check permissions
  const employeeTypePermission = permissions == null || permissions?.userPermissions?.find(
    perm => perm.permissionName === "Employee Type"
  );
  
  const canAddEmployeeType = permissions == null || employeeTypePermission?.subPermissions?.some(
    sub => sub.subPermissionName === "Add"
  ) || false;
 

   const [showPermissionModal, setShowPermissionModal] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [invalidDescription, setInvalidDescription] = useState(false);
    const [name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [displayText, setDisplayText] = useState('FTE Calculation');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
      if (selectedModule && selectedModule !== 'HR Admin' && selectedModule !== 'User Management' && selectedModule !== 'Estimation Detail' ) {
        setDisplayText(selectedModule);
      }
    }, [selectedModule]);
    const handleSave = async (e) => {
        e.preventDefault();
        if (!canAddEmployeeType) {
          setShowPermissionModal(true);
          return;
        }
        setIsSubmitting(true)
        if (!name.trim() || !Description.trim() ) {
          setInvalidName(!name.trim());
          setInvalidDescription(!Description.trim());
          return; 
      }
        try {
        const updatedDepid = {
            name: name,
            Description: Description,
            createdBy: "admin",
            modifiedBy: "admin",
        };
        const response = await dispatch(addEditEmplyeetype(updatedDepid))
        .then((response)=>{
            if (response.payload.isSuccess){
              dispatch(getEmployetypeData())
                setName('');
                setDescription('');
                setIsSubmitting(false);

            }
        })
        }catch (error) {
        //   alert('Failed to create your FTE.');
        setIsSubmitting(false);

        } 
    }
         const handleclear = () => {
          setName('');
          setDescription('')
         }
  return (
    <>
  <div className="childsection ">
  <h1>HR Admin</h1>
  </div>
    <div className="d-flex p-1 pt-2 mt-3 ps-4 pt-0 topnavbar-card" style={{backgroundColor:"#FFFFFF" ,  
      boxShadow:"5.83px 5.83px 52.51px 0px #0000000D"
 }} >
        <h1>Home </h1>
           <h1 className="ms-1 me-1">/</h1>
           <h1>HR Admin </h1>
           <h1 className="ms-1 me-1">/</h1>
           <h1 style={{color:"#4880FF" , 
           }}>{selectedModule}</h1>
     </div>
    <div style={{backgroundColor:"#FFFFFF" , marginTop:"2px" }} >
          <p className="ms-2 pt-3 ps-3 pb-0 mb-1"
    style={{ 
      fontWeight: 600, 
      fontSize: '22px', 
      lineHeight: '100%', 
      letterSpacing: '0px', 
      color:"#000000",
      fontFamily:"Poppins, sans-serif",
    }}
      >Add Emyployee Type</p>        
            {popupMessage && (
                    <div className='juCkip'>
                      <div className='jiZwRo'>
                      <div className="popup m-4" style={{ position: 'fixed', top: "50%", left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'white', borderRadius: '6px', Width: '100%', maxWidth: '650px' }}>
                      <div className='' sx={{ width: '100%', position: 'relative' }} spacing={2}>
                <>
                                <div >
                    <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                        <div className='mt-2'>
                            <MdErrorOutline style={{ color: 'green', fontSize: '40px' }} />
                        </div>
                        <div severity="success ps-4" style={{ fontSize: '20px' }}>{popupMessage}</div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '30px' , marginBottom:'10px' }}>
                        <button className="btn btn-success close-button" onClick={() => {
                            setPopupMessage("");
                            setName('');
                            setDescription('')
                        }}>Add</button>
                    </div>
                    </div>
    
                </>
    </div>
    </div>
    </div>
    </div>
    
    )}
                  
       <PermissionsModal
        showPermissionModal={showPermissionModal}
        handleClosedata={() => setShowPermissionModal(false)}
        HeaderMessage="Permission Required"
        permissionMessage="Please contact your admin to request permission for this action."
      />
                  <form className="row g-3 ms-3  mt-1" noValidate onSubmit={handleSave}>
      <div className="mt-4 mb-4 w-100">
        <div className="row g-3 align-items-start">
        <div className="col-12 col-md-5 col-lg-4 form-group mt-1">
            <label
              className="pb-2"
              style={{
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '19px',
                letterSpacing: '0px',
                color: "#040F0F",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Emyployee Type <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              className={`form-control form-control-lg ${invalidName ? 'is-invalid' : ''}`}
              style={{
                color: "#040F0F",
                border: "1px solid #D6D6D6",
                borderRadius: '8px',
              }}
              placeholder="Enter Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setInvalidName(false);
              }}
            />
            {invalidName && <div className="invalid-feedback">Name required?</div>}
          </div>
          <div className="col-12 col-md-5 col-lg-4 form-group mt-1">
            <label
              className="pb-2"
              style={{
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '19px',
                letterSpacing: '0px',
                color: "#040F0F",
                fontFamily: "Poppins, sans-serif",
              }}
            >
               Employee Description  <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              className={`form-control form-control-lg ${invalidName ? 'is-invalid' : ''}`}
              style={{
                color: "#040F0F",
                border: "1px solid #D6D6D6",
                borderRadius: '8px',
              }}
              placeholder="Enter Description "
              value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
                setInvalidDescription(false);
              }}
            />
            {invalidName && <div className="invalid-feedback">Description required?</div>}
          </div>
              <div className="col-12 col-md-3 col-lg-2 d-flex  gap-2 mt-4 pt-2">
              <button
              onClick={handleSave}
        disabled={!Description || !name }
        className={`save-button w-50 ps-5 pe-5 d-flex justify-content-center align-items-center ${
          (!name || !Description ) ? 'disabled-button' : ''
        }`}
        style={{
          height: '43px',
          borderRadius: '10px',
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity: (!Description || !name ) ? 0.6 : 1, 
          cursor: (!name || !Description ) ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? 'Adding...' : 'Add Now'}
      </button>
      <button
              onClick={handleclear}
              disabled={!Description || !Description }
        className={`cancel-button  w-50 ps-5 pe-5  d-flex justify-content-center align-items-center ${
          (!Description || !Description ) ? 'disabled-button' : ''
        }`}
        style={{
          height: '43px',
          borderRadius: '10px',
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity: (!Description || !Description ) ? 0.6 : 1, 
          cursor: (!Description || !Description ) ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? 'Loading...' : 'Cancel'}
      </button>
          
          </div>
         
    
            </div>
          </div>
        </form>
              </div>
              <Employeelist/>
    </>

  )
}

export default Employtype
  
   