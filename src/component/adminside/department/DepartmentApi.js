import React, { useContext, useState } from 'react';
import { addEditDeparment , getDepartmentData } from '../../../redux/features/auth/authSlice';
import { useDispatch  } from 'react-redux';
import '../adminscreens.css';
import { MdErrorOutline } from "react-icons/md";
import AuthContext from '../../../context/AuthProvider';
import PermissionsModal from '../../Modals/PermissionsModal';
    const DepartmentApi = () => {
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
  const [popupMessage, setPopupMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [Description, setDescription] = useState('');
    const [invalidDescription, setInvalidDescription] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async (e) => {
    if (!canAddEmployeeType) {
      setShowPermissionModal(true);
      return;
    }
        e.preventDefault()
        setIsSubmitting(true);
        if (!name.trim() || !Description.trim()) {
          setInvalidName(!name.trim());
          setInvalidDescription(!Description.trim());
          return; 
      }
        try {
          const  Depformvalue ={
            name: name,
            Description: Description,
            createdBy: "string",
            modifiedBy: "string",
          }
          const response = await dispatch(addEditDeparment(Depformvalue))
          .then((response)=>{
             if (response.payload.isSuccess){
              dispatch(getDepartmentData());
              setName('');
              setDescription('');
              setIsSubmitting(false);
             }
            })
        } catch (error) {
            // alert("Error in APi")
            setIsSubmitting(false);
        }
    }
  const handleclear = () => {
    setName('');
    setDescription('');
}
  return (

    <div style={{  marginTop:"1px"}}   >
      <p className=" Top-heading-tag pb-0 mb-1"

  >Add Department</p>        
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
              
              <form className="row g-3  pt-3"  noValidate onSubmit={handleSave}>
  <div className="mt-4 mb-2 w-100">
    <div className="row g-3 align-items-center">
    <div className="col-12 col-md-4 col-lg-4 form-group mt-1">
        <label
          className="pb-2 label-tag"
         
        >
          Department Name <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-lg ${invalidName ? 'is-invalid' : ''}`}
          
          placeholder="Enter Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setInvalidName(false);
          }}
        />
        {invalidName && <div className="invalid-feedback">Name required?</div>}
      </div>
      <div className="col-12 col-md-4 col-lg-4 form-group mt-1">
        <label
          className="pb-2 label-tag"
        >
           Department Description <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-lg ${invalidName ? 'is-invalid' : ''}`}
       
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
        disabled={!Description || !name  }
        className={`save-button w-50 ps-5 pe-5 d-flex justify-content-center align-items-center ${
          (!name  || !Description ) ? 'disabled-button' : ''
        }`}
        style={{
          borderRadius: '10px',
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity: (!Description || !name  ) ? 0.6 : 1, 
          cursor: (!name  || !Description ) ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? 'Adding...' : 'Add Now'}
      </button>
      <button
              onClick={handleclear}
              disabled={!Description || !name }
        className={`cancel-button  w-50 ps-5 pe-5  d-flex justify-content-center align-items-center ${
          (!name || !Description ) ? 'disabled-button' : ''
        }`}
        style={{
          borderRadius: '10px',
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity:  1, 
          cursor:  'pointer'
        }}
      >
        Cancel
      </button>
          
          </div>

        </div>
      </div>
     
    </form>
          </div>
     
    )
}

export default DepartmentApi