

import React, { useState , useEffect , useRef, useContext } from 'react';
import { addEditDeparmentFTE, getProject , getSubDepartment , addEditProject } from '../../../redux/features/auth/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import Stickyheader from '../../upperheader/Stickyheader';
import '../adminscreens.css'
import { MdErrorOutline } from "react-icons/md";
import { ReactComponent as Dropdownicon } from '../../../assets/WfoAssets/SVG/SidebarVector.svg';  
import PermissionsModal from '../../Modals/PermissionsModal';
import AuthContext from '../../../context/AuthProvider';

const ProjectAPI = ({toggleSidebarClass}) => {
    const dispatch = useDispatch();
    const { permissions } = useContext(AuthContext);
  
    // Check permissions
    const employeeTypePermission = permissions == null || permissions?.userPermissions?.find(
      perm => perm.permissionName === "Project"
    );
    
    const canAddEmployeeType = permissions == null || employeeTypePermission?.subPermissions?.some(
      sub => sub.subPermissionName === "Add"
    ) || false;
  
     const [showPermissionModal, setShowPermissionModal] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidDescription, setInvalidDescription] = useState(false);
    const [name, setName] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [Description, setDescription] = useState('');
    const [depdatalist, setdepdatalist] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [DataId, setDataId] = useState('')
    const [invalidselectoption, setinvalidselectoption] = useState(false);
           const [dropdownOpen, setDropdownOpen] = useState(false);
           const [isSubmitting, setIsSubmitting] = useState(false);

         const dropdownRef = useRef(null);
       const handleDropdownOptionSelect = (option) => {
         setSelectedOption(option.name);
         setDataId(option.id);
         setinvalidselectoption(false);
         setDropdownOpen(false);
       };
   
      const handleSave = async (e) => {
      
        if (!canAddEmployeeType) {
          setShowPermissionModal(true);
          return;
        }
        e.preventDefault();
        setIsSubmitting(true);
        if (!name.trim() || !Description.trim() || !selectedOption) {
            setInvalidName(!name.trim());
            setInvalidDescription(!Description.trim());
            setinvalidselectoption(!selectedOption);
            return;
        }
        try {
            const projectData = {
                name: name,
                Description: Description,
                subDepartmentId: DataId, 
                activity: "1",
                time: 10,
            };
            
            const response = await dispatch(addEditProject(projectData))
                .then((response) => {
                    if (response.payload.isSuccess) {
                        dispatch(getProject());
                        setName('');
                        setDescription('');
                        setSelectedOption('');
                        setSelectedOption(null);
                        setIsSubmitting(false);
                    }
                });
        } catch (error) {
            // Handle error
            setIsSubmitting(false);
        }
    }

      const fetchDepdropdown = async () => {

        try {
           dispatch(getSubDepartment())
                           .then((response) => {
                               setdepdatalist(response.payload);
                           });
        } catch (error) {
           console.error('Error fetching FTE data:', error);
         }
       }
         useEffect(() => {
            fetchDepdropdown();
         }, []);
         const handleclear = () => {
          setName('');
          setDescription('')
          setSelectedOption()
          setInvalidDescription(true)
          setInvalidName(true)
          setSelectedOption(null)
        setinvalidselectoption(true);

{        console.log(invalidselectoption ,"sks");
}}
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Add when mounted
  document.addEventListener('mousedown', handleClickOutside);
  
  // Clean up on unmount
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);
  return (
    <>
    <PermissionsModal
        showPermissionModal={showPermissionModal}
        handleClosedata={() => setShowPermissionModal(false)}
        HeaderMessage="Permission Required"
        permissionMessage="Please contact your admin to request permission for this action."
      />
     <div class="">
                    <div style={{backgroundColor:"#FFFFFF" ,border:"1px solid #E0E3E9" ,    
                       marginTop:"2px",
}} >
      <p className="ms-2 p-3   mb-1 Top-heading-tag"
  >Add Project</p>   

<form className="row g-3 ms-2 needs-valida" noValidate onSubmit={handleSave}>
  <div className="mt-4 mb-4 w-100">
    <div className="row g-3 align-items-center">
      
      <div className="col-12 col-md-6 col-lg-3 ms-md-2 mt-1">
        <label
          className="pb-1 label-tag"
        >
         Sub-Department <span style={{ color: 'red' }}>*</span>
        </label>

            <div
         ref={dropdownRef}
         className="d-flex align-items-center"
         style={{
           position: "relative",
           border: "1px solid #D5D5D5",
           borderRadius: "10px",
           display: "flex",
           alignItems: "stretch",
           justifyContent: "center",
         }}
       >
         {/* Dropdown toggle */}
         <div
           className="d-flex align-items-center justify-content-between px-3 py-2 w-100"
           style={{
             cursor: "pointer",
             overflow: "hidden",
             textOverflow: "ellipsis",
             whiteSpace: "nowrap",
             fontSize: "15px",
             fontWeight: 400,
             fontFamily: "Poppins, sans-serif",
           }}
           onClick={() => setDropdownOpen(!dropdownOpen)}
         >
           {selectedOption || "Select Sub-Department"}
           <Dropdownicon className="ms-2" />
         </div>
       
         {/* Dropdown menu */}
         {dropdownOpen && (
           <div
             className="position-absolute bg-white"
             style={{
               top: "85%",
               left: "-1px",
               zIndex: 1000,
               marginTop: "6px",
               width: "100%",
               borderRadius: "2px",
               border: "1px solid #D5D5D5",
               boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
               whiteSpace: "nowrap",
               maxHeight: "150px",
               overflowY: "auto",
             }}
           >
             {depdatalist?.length > 0 ? (
               depdatalist.map((item, idx) => (
                 <div
                   key={idx}
                   onClick={() => {
                     handleDropdownOptionSelect(item);
                     setDropdownOpen(false);
                   }}
                   style={{
                     padding: "8px 12px",
                     // borderBottom: idx !== depdatalist.length - 1 ? "1px solid #D5D5D5" : "none",
                     cursor: "pointer",
                     fontSize: "14px",
                     lineHeight: '100%',
                     letterSpacing: '0px',
                     fontWeight: 400,
                     backgroundColor: selectedOption === item.name ? '#4880FF' : '', // Blue if selected
                     color: selectedOption === item.name ? '#ffffff' : '#000000', // Darker text if selected
                     ':hover': {
                       backgroundColor: '#4880FF', // Light blue on hover
                     },
                   }}
                   // Add hover effect with CSS-in-JS
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4880FF'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedOption === item.name ? '#4880FF' : '#F9F9FB'}
                 >
                   {item.name}
                 </div>
               ))
             ) : (
               <div style={{ padding: "8px 12px" }}>No Data</div>
             )}
           </div>
         )}
       </div>
        <div className="text-start">
          {invalidselectoption && (
            <div style={{ color: "#dc3545", fontSize: "14px" }}>
              Sub-Department required?
            </div>
          )}
        </div>
      </div>

      {/* Sub Department Name */}
      <div className="col-12 col-md-6 col-lg-3 form-group mt-1">
        <label
          className="pb-1 label-tag"
        >
          Project Name <span style={{ color: 'red' }}>*</span>
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
        {invalidName && <div className="invalid-feedback">  Name required?</div>}
      </div>

      {/* Sub Department Description */}
      <div className="col-12 col-md-6 col-lg-3 form-group mt-1">
        <label
          className="pb-1 label-tag"
        >
          Project  Description <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-lg ${invalidDescription ? 'is-invalid' : ''}`}
          placeholder="Enter Description"
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
            setInvalidDescription(false);
          }}
        />
        {invalidDescription && (
          <div className="invalid-feedback"> Description required?</div>
        )}
      </div>

      {/* Buttons */}
      <div className="col-12 col-md-3 col-lg-2 d-flex  gap-2 mt-4 pt-2">
              <button
              onClick={handleSave}
              disabled={!Description || !name || !selectedOption }
        className={`save-button w-50 ps-5 pe-5 d-flex justify-content-center align-items-center ${
          (!name || !selectedOption || !Description ) ? 'disabled-button' : ''
        }`}
        style={{
          borderRadius: '10px',
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity: (!Description || !name || !selectedOption ) ? 0.6 : 1, 
          cursor: (!name || !selectedOption || !Description ) ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? 'Adding...' : 'Add Now'}
      </button>
      <button
              onClick={handleclear}
              disabled={!Description || !name || !selectedOption }
        className={`cancel-button  w-50 ps-5 pe-5  d-flex justify-content-center align-items-center ${
          (!name || !selectedOption || !Description ) ? 'disabled-button' : ''
        }`}
        style={{
          borderRadius: '10px',
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity: (!Description || !name || !selectedOption ) ? 0.6 : 1, 
          cursor: (!name || !selectedOption || !Description ) ? 'not-allowed' : 'pointer'
        }}
      >
         Cancel
      </button>
          
          </div>
    </div>
  </div>
</form>

                </div>
            </div>
          
  
    </>

  )
}



export default ProjectAPI
   
          
