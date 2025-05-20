import React, { useState, useEffect } from 'react';
import { addEditDeparment, getDepartmentById, getDepartmentData } from '../../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../../component/adminside/adminscreens.css';
import { MdErrorOutline } from "react-icons/md";
import { Modal } from 'react-bootstrap';
import LatestSekeltonLoader from '../SekeltonLoader/LatestSekeltonLoader';

const DepartmentEdit = ({ EditId , active  , setActive}) => {
  const dispatch = useDispatch();
  const [popupMessage, setPopupMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [Description, setDescription] = useState('');
  const [invalidDescription, setInvalidDescription] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setisLoading] = useState(false)
    const [isInitialLoad, setIsInitialLoad] = useState(true); // Add this state

  // Fetch department data when EditId changes
  useEffect(() => {
    if (EditId) {
      setIsInitialLoad(true);
      const fetchDepartment = async () => {
        try {
          const response = await dispatch(getDepartmentById(EditId));
          if (response.payload) {
            const department = response.payload;
            setName(department.name);
            setDescription(department.description);
            setIsEditing(true);
          }
        } catch (error) {
          console.error("Error fetching department:", error);
        } finally {
          setIsInitialLoad(false);

        }
      };
      fetchDepartment();
    } else {
      // Reset form if no EditId (adding new department)
      setName('');
      setDescription('');
      setIsEditing(false);
    }
  }, [EditId, dispatch]);

  const handleSave = async (e) => {
    setisLoading(true);
    e.preventDefault();
    
    if (!name.trim() || !Description.trim()) {
      setInvalidName(!name.trim());
      setInvalidDescription(!Description.trim());
      setisLoading(false);
      return;
    }
  
    try {
      const Depformvalue = {
        id: isEditing ? EditId : 0,
        name: name,
        description: Description,
        createdBy: "string",
        modifiedBy: "string",
      };
  
      const response = await dispatch(addEditDeparment(Depformvalue));
      if (response.payload.isSuccess) {
        dispatch(getDepartmentData());
        setPopupMessage(response.payload.alertMessage);
        setPopupVisible(true);
        if (!isEditing) {
          setName('');
          setDescription('');
        }
      }
    } catch (error) {
      console.error("Error saving department:", error);
      setPopupMessage("Error saving department");
      setPopupVisible(true);
    } finally {
      setisLoading(false);
      setActive(false)

      // This will run whether the API call succeeds or fails
    }
  };

  

  return (

    <Modal show={active} onHide={() => setActive(false)} centered size="lg">
    <Modal.Body className="p-4 pt-3 " >
      <div className="d-flex justify-content-between align-items-center mb-4 m-3">
        <h4 className="m-0 fw-bolder">Edit Department</h4>
        <button
          className="btn-close"
          onClick={() => setActive(false)}
          aria-label="Close"
        />
      </div>
      {isInitialLoad  || isLoading  ? (
        <LatestSekeltonLoader/>
      ):(
              <div style={{  borderTop: "none" }} className=''>
     
      <form className="row g-3 ms-3  pt-4" noValidate onSubmit={handleSave}>
        <div className="mt-4 mb-4 w-100">
          <div className="row g-3 align-items-center justify-content-between">
            <div className="col-12 col-md-6 form-group mt-1">
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
                Department Name <span style={{ color: 'red' }}>*</span>
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
            <div className="col-12 col-md-6  form-group mt-1">
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
                Department Description <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                className={`form-control form-control-lg ${invalidDescription ? 'is-invalid' : ''}`}
                style={{
                  color: "#040F0F",
                  border: "1px solid #D6D6D6",
                  borderRadius: '8px',
                }}
                placeholder="Enter Description"
                value={Description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setInvalidDescription(false);
                }}
              />
              {invalidDescription && <div className="invalid-feedback">Description required?</div>}
            </div>
            <div className=" col-md-12 justify-content-end   align-item-center d-flex gap-2 mt-4 pt-4">
             <div className='d-flex gap-2'>
             {isLoading ? (
              <>
                             {/* <div className=' '> */}
           <button className="save-button w-100"  type="submit"  disabled style={{whiteSpace:"nowrap"}}>
  <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  Loading...
</button>

              </>
            ) : (
            //    <div className=' pt-3'>
           <button className="save-button w-100"   type="button"   style={{whiteSpace:"nowrap"}}
           onClick={handleSave}
           >
           Update Now
               </button>
            //    </div>
            )}             
             
             </div>
            </div>
          </div>
        </div>
      </form>
    </div>
            )

  }
    
    </Modal.Body>
    </Modal>
  )
}

export default DepartmentEdit;