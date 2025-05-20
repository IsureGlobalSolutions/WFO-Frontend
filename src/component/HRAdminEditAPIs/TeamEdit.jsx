import React, { useState, useEffect, useRef } from 'react';
import { 
  addEditTeam, 
  getProject, 
  getTeam, 
  getTeamById,
} from '../../redux/features/auth/authSlice';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ReactComponent as Dropdownicon } from '../../assets/WfoAssets/SVG/SidebarVector.svg';  
import LatestSekeltonLoader from '../SekeltonLoader/LatestSekeltonLoader';

const TeamEdit = ({ EditId, setEditId  , setActive , active}) => { // Add editId prop for edit mode
  const dispatch = useDispatch();
  const [invalidName, setInvalidName] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);
  const [name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [depdatalist, setdepdatalist] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [invalidselectoption, setinvalidselectoption] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [originalData, setOriginalData] = useState(null); // Store fetched data for comparison
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Add this state

  // Fetch department dropdown options
  useEffect(() => {
    dispatch(getProject())
      .then((response) => {
        setdepdatalist(response.payload || []);
        setIsInitialLoad(false);
      });
  }, []);

  
  useEffect(() => {
    if (EditId , dispatch) {
      const fetchData = async () => {
        setIsInitialLoad(true);
        try {
          const response = await dispatch(getTeamById(EditId , dispatch));
          if (response.payload) {
            const data = response.payload;
            console.log("🚀 ~ fetchData ~ data:", data)
            setName(data.name);
            setDescription(data.description);
          
            setOriginalData(data); // Store original data for comparison
            setIsInitialLoad(false);

            if (depdatalist?.length > 0) {
              const foundSubDepartment = depdatalist?.find(
                item => item.id.toString() === data.projectId.toString()
              );
              if (foundSubDepartment) {
                setSelectedOption(foundSubDepartment);
              }
            }
          }
        } catch (error) {
          console.error("Error fetching sub-department:", error);
        } finally {
          setIsLoading(false);
          setIsInitialLoad(false);
        }
      };
      fetchData();
    } else {
      // Reset form if not in edit mode
      setName('');
      setDescription('');
      setSelectedOption('');
      setOriginalData(null);
    }
  }, [EditId, depdatalist]);
 
  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate inputs
    if (!name.trim() || !Description.trim() || !selectedOption) {
      setInvalidName(!name.trim());
      setInvalidDescription(!Description.trim());
      setinvalidselectoption(!selectedOption);
      setIsLoading(false);
      return;
    }

    // Check if data is unchanged (edit mode only)
    if (EditId && originalData && 
        name === originalData.name && 
        Description === originalData.description &&
        selectedOption === originalData.departmentName) {
      alert("No changes detected!");
      setIsLoading(false);
      return;
    }

    try {
      const Depformvalue = {
        id: EditId || 0, // Include ID if editing
        name: name,
        description: Description,
        departmentId: selectedOption.id,
        createdBy: "string",
        modifiedBy: "string",
      };

      const response = await dispatch(addEditTeam(Depformvalue));
      if (response.payload?.isSuccess) {
        dispatch(getTeam());
        setActive(false)

        // Refresh list
        if (!EditId) {
          // Clear form if it was an "Add" operation
          setName('');
          setDescription('');
          setSelectedOption('');
        }
        setEditId(null);

        // Exit edit mode
      }
    } catch (error) {
      console.error("Error saving sub-department:", error);
    }finally {
        setIsLoading(false);
        setActive(false)
  
        // This will run whether the API call succeeds or fails
      }
  };

//   const handleClear = () => {
//     if (editId && originalData) {
//       // Reset to original values in edit mode
//       setName(originalData.name);
//       setDescription(originalData.description);
//       setSelectedOption(originalData.departmentName);
//     } else {
//       // Clear all fields in add mode
//       setName('');
//       setDescription('');
//       setSelectedOption('');
//     }
//   };

  return (
    <Modal show={active} onHide={() => setActive(false)} centered size="lg">
       <Modal.Body className="p-4 pt-3 " >
         <div className="d-flex justify-content-between align-items-center mb-4 m-3">
           <h4 className="m-0 fw-bolder">Edit Team </h4>
           <button
             className="btn-close"
             onClick={() => setActive(false)}
             aria-label="Close"
           />
         </div>

         {isInitialLoad  || isLoading  ? (
          <LatestSekeltonLoader/>
         ) : (
          <form className="row g-5 align-items-center ms-0  ps-0 p-5 ps-0" onSubmit={handleSave}>
          {/* Department Dropdown */}
          <div className="col-12 col-md-8 mt-1">
          <label className="form-label pb-2" style={{ 
            fontWeight: 600, 
            fontSize: '15px', 
            lineHeight: '100%', 
            letterSpacing: '0px', 
            color: "#606060",
            fontFamily: "Poppins, sans-serif",
          }}>
           Project <span className="text-danger">*</span>
          </label>
          <select
            className="form-select"
            value={selectedOption?.id || ""}  // Ensure this matches option values
            onChange={(e) => {
              const selectedId = e.target.value;
              const selected = depdatalist.find(item => item.id.toString() === selectedId);
              if (selected) {
                setSelectedOption(selected);  // Update your state with the full object
                setinvalidselectoption(false);
              }
            }}
            style={{
              border: '0.94px solid #D6D6D6',
              color: selectedOption ? '#000' : '#A3A3A3',
              borderRadius: '10px',
              padding: '10px 15px',
              height: '46px',
              cursor: 'pointer',
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <option value="" style={{ color: '#A3A3A3' }}>Select Team</option>
            {depdatalist?.map((department) => (
              <option 
                key={department.id} 
                value={department.id}  // Ensure this matches the value type
              >
                {department.name}
              </option>
            ))}
          </select>
          {invalidselectoption && (
            <div className="text-danger small mt-1">Team required?</div>
          )}
        </div>
        
          {/* Sub-Department Name */}
          <div className="col-12 col-md-6 pt-0">
            <label className="form-label pb-2">Team Name <span className="text-danger">*</span></label>
            <input
              type="text"
              className={`form-control ${invalidName ? 'is-invalid' : ''}`}
              placeholder="Enter Name"
              style={{ height: "43px" }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setInvalidName(false);
              }}
            />
            {invalidName && <div className="invalid-feedback">Name required?</div>}
          </div>
        
          {/* Sub-Department Description */}
          <div className="col-12 col-md-6 ">
            <label className="form-label pb-2">Description <span className="text-danger">*</span></label>
            <input
              type="text"
              className={`form-control ${invalidDescription ? 'is-invalid' : ''}`}
              placeholder="Enter Description"
              style={{ height: "43px" }}
              value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
                setInvalidDescription(false);
              }}
            />
            {invalidDescription && <div className="invalid-feedback">Description required?</div>}
          </div>
        
          {/* Buttons - Now properly aligned at the bottom */}
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
        </form>
         )  
}
       
    
    </Modal.Body>
    </Modal>
  );
};

export default TeamEdit;



