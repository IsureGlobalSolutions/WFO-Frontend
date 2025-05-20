

import React, { useEffect, useState, useRef  , useContext} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { addEditFte, getDepFteData, deleteDepFteData } from '../../redux/features/auth/authSlice';
import {Button , Modal } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from 'react-icons/fa';
import DepartmentFTEModal from '../Modals/DepartmentFTEModal';
import './Organization.css'
import { MdErrorOutline } from "react-icons/md";
import { ReactComponent as Deleticon } from '../../assets/WfoAssets/SVG/Delete.svg';  
import { ReactComponent as EditIcon } from '../../assets/WfoAssets/SVG/Edit.svg'; 
import { ReactComponent as Dropdownicon } from '../../assets/WfoAssets/SVG/SidebarVector.svg';  
import { ReactComponent as PlusButton } from '../../assets/WfoAssets/SVG/PlusButton.svg';  

import { IoIosSearch } from "react-icons/io";
import Depfte from '../fte/Depfte';
import DepartmentApi from '../adminside/department/DepartmentApi';
import Deletemodel from '../deletemodel/Deletemodel';
import LatestSekeltonLoader from '../SekeltonLoader/LatestSekeltonLoader';
import AuthContext from '../../context/AuthProvider';
import PermissionsModal from '../Modals/PermissionsModal';
// Mapping between display names and actual data properties
const columnMap = {
 
  "FTE Name": "fteName",
  "Working Hrs": "workingHours",
  "Break Hrs": "breakHours",
  "Gazetted Hrs": "gazettedHolidays",
  "Annual Leaves": "annualLeaves",
  "Sick Leaves": "sickLeaves",
  "Casual Leaves": "casualLeaves",
  "Working Days": "workingDays",
  "Total FTE": "fte"
};

const arrData = [
  
  "S.No",
  "FTE Name",
  "Working Hrs",
  "Break Hrs",
  "Gazetted Hrs",
  "Annual Leaves",
  "Sick Leaves",
  "Casual Leaves",
  "Working Days",
  "Total FTE",
  "Action"
];

function Deporganizationlist({getfterender}) {
  const dispatch = useDispatch();

  const { permissions } = useContext(AuthContext);
  
  // Check permissions
  const ftePermission = permissions?.userPermissions?.find(
    perm => perm.permissionName === "Department FTE"
  ) || { subPermissions: [{ subPermissionName: "Add" }, { subPermissionName: "Edit" }, { subPermissionName: "Delete" }, { subPermissionName: "View" }] };
  
  
  const canAddFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Add");
  const canEditFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Edit");
  const canDeleteFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Delete");
  const canViewFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "View");
  

  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [permissionMessage, setPermissionMessage] = useState("");

  const Departmentdata = useSelector((state) => state.auth.departmentData );
  const loading = useSelector((state) => state.auth.loading);
  const [isActive, setIsActive] = useState(false);
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [popupMessage, setPopupMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeAddModal, setactiveAddModal] = useState(true);

  const [showSearch, setShowSearch] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const dropdownRef = useRef(null);
    const [selectedColumn, setSelectedColumn] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (!selectedColumn || searchValue.trim() === '') {
      setFilteredData(Departmentdata);
    } else {
      const lowerSearch = searchValue.toLowerCase();
     
      const dataProperty = columnMap[selectedColumn];
      
      const filtered = Departmentdata?.filter((item) => {
        const value = item[dataProperty]?.toString().toLowerCase();
        return value?.includes(lowerSearch);
      });
      
      setFilteredData(filtered);
    }
  }, [selectedColumn, searchValue, Departmentdata]);
   
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  const [activeEdit, setactiveEdit] = useState(false);
  const itemsPerPage = 1; 
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Departmentdata?.length === 0
    ? 0
    : Math.min(startIndex + itemsPerPage, Departmentdata?.length); // not paginatedData.length
  
    const paginatedData = filteredData?.slice (startIndex, endIndex);
 

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const fetchmethod = async (e) => {
    try {
      dispatch(getDepFteData())
    } catch (error) {
      alert("error in Api ")
    }
  }
  useEffect(() => {
    fetchmethod()
  }, [deleteTrigger])
  useEffect(() => {
    fetchmethod();
}, [getfterender])
  const [deleteid, setdeleteid] = useState(null)
  const conformDelete = async () => { 
    try {
      const response =  await dispatch(deleteDepFteData(deleteid));
      console.log(response.payload , "responsedatadd")
      console.log("2");
       if (response.payload.isSuccess){
        // setPopupMessage(response.payload.alertMessage) 
          setShow(false);
       }else{
        setPopupMessage(response.payload.alertMessage) 
        setTimeout(() => {
          setShow(false);
        }, 2000);
       }
        setDeleteTrigger((prev) => !prev);
    } catch (error) {
      setPopupMessage("Error occuring FTE Not Deleted")   
    }
    setdeleteid(null);

};
const [show, setShow] = useState(false);
    const handleDelete = async (id) => {
      if (!canDeleteFTE) {
        setShowPermissionModal(true);
        return;
      }
    setShow(true);
    setPopupMessage("Are you sure you want to delete this FTE? All associated files and related data will be permanently removed")
    setdeleteid(id);    
  
  };
  const handleClosedata = () => setShow(false);
  const handleOpenModal = (id) => {
    if (!canDeleteFTE) {
      setShowPermissionModal(true);
      return;
    }
    setactiveEdit(true)
    setdeleteid(id)
  }
  const handleAddFTE =()=>{
      if (!canDeleteFTE) {
       setShowPermissionModal(true);
       return;
     }
     setactiveAddModal(false)
  }
  if (!canViewFTE) {
    return null;
  }
  return (
    <>
       
       <Deletemodel
         show={show} 
         handleClosedata={handleClosedata} 
         conformDelete={conformDelete} 
         message="Do you really want to remove such data?"
      />
    <PermissionsModal
        showPermissionModal={showPermissionModal}
        handleClosedata={() => setShowPermissionModal(false)}
        HeaderMessage="Permission Required"
        permissionMessage="Please contact your admin to request permission for this action."
      />
{activeEdit ? (
  <DepartmentFTEModal
  active={activeEdit} 
  onBack={() => setactiveEdit(false)}
  selectedId={deleteid}
  />
) : (activeAddModal ? (
  <div className=" " style={{backgroundColor:"#FFFFFF" , marginTop:"2px"}}  > 
  <div className="d-flex  justify-content-between align-items-center ms-2 p-4 ps-3 pb-0 mb-1">
  <p className="mb-1"
style={{ 
fontWeight: 600, 
fontSize: '18px', 
lineHeight: '100%', 
letterSpacing: '0px', 
color:"#000000",
fontFamily:"Poppins, sans-serif",
}}
>Department FTE List</p>
<div className=" d-flex">
<button type="button" class="save-button gap-2 d-flex align-item-center ps-4 pe-4 w-50" onClick={handleAddFTE} >
 <PlusButton className="plus-button"  />
 Add FTE
</button>
<div className="d-flex justify-content-end ms-2  ps-3 pb-0 pt-0 pe-0 me-0  position-relative">
<div
style={{
border: "1px solid #D5D5D5",
borderRight:"0px",
backgroundColor:'#F9F9FB',
borderRadius: "10px 0px 0px 10px",
display: "flex",
alignItems: "stretch",
overflow: "hidden",
justifyContent: "center",

}}
>
<div
className="d-flex align-items-center px-3 p-2"
style={{
  borderRight: "1px solid #D5D5D5",
  cursor: "pointer",
}}
onClick={() => setShowSearch(!showSearch)}
>
<IoIosSearch className="search-icon" />
</div>

{showSearch && (
<input
  type="text"
  className=""
  placeholder={`Search ${selectedColumn || '...'}`}
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  disabled={!selectedColumn}
  style={{
    width: "150px",
    outline: "none",
    borderRight: "1px solid #D5D5D5",
  }}
/>
)}

<div
className="d-flex align-items-center px-3"
style={{
  fontWeight: 500,
  fontSize: "15px",
  color: "#202224",
  whiteSpace: "nowrap",
  lineHeight:"100%",
  letterSpacing:"0px",
  fontFamily:"Poppins, sans-serif",
}}
>
Filter By
</div>
</div>
<div
ref={dropdownRef}
className="d-flex align-items-center"
style={{ position: "relative" ,
border: "1px solid #D5D5D5",
backgroundColor:'#F9F9FB',
borderRadius: "0px  10px 10px 0px",
display: "flex",
alignItems: "stretch",
justifyContent: "center"
}}
>
<div
className="d-flex align-items-center justify-content-between px-3 py-2"
style={{
width: "120px",
cursor: "pointer",
overflow: "hidden",
textOverflow: "ellipsis",
whiteSpace: "nowrap",
fontSize: "15px",
fontWeight: 500,
fontFamily:"Poppins, sans-serif",
}}
value={selectedColumn}
onClick={() => setDropdownOpen(!dropdownOpen)}


>
{selectedOption || "Select"}
<Dropdownicon className="ms-2" />
</div>

{dropdownOpen && (
<div
className="position-absolute bg-white"
style={{
  top: "85%",
  left: "-1px",
  zIndex: 1000,
  marginTop: "6px",
  width: "123px",
  borderRadius: "2px",
  border: "1px solid #D5D5D5",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  whiteSpace: "nowrap",
  maxHeight: "150px",     
  overflowY: "auto",
}}
>
{
   arrData
     .filter(item => item !== "Action" && item !=="S.No") // Exclude "Action" from dropdown
     .map((item, idx) => (
    <div
      key={idx}
    
      
      onClick={() => {
        setSelectedOption(item);
        setSelectedColumn(item);
        setShowSearch(true);
        setSearchValue('');
        setDropdownOpen(false);
      }}
    
      style={{
        padding: "8px 12px",
        borderBottom:
          idx !== arrData.length - 1
            ? "1px solid #D5D5D5"
            : "none",
        cursor: "pointer",
        fontSize: "14px",
        lineHeight: '100%', 
letterSpacing: '0px', 
fontWeight: 600, 
        backgroundColor:'#F9F9FB',
        color:"#000000"
      }}
    >
      {item}
    </div>
  ))
}
</div>
)}
</div>
</div>
</div>
</div>
<div className="d-flex   ms-2 p-4 ps-3 pb-0 pt-0 pe-4 align-items-start" >
<table className="table    table-hover table-striped pb-1" style={{borderRadius:"10px"}}>
<thead  >
  <tr style={{ border: "1px solid #dee2e6" , borderRadius:"10px"  }}>
    {arrData?.map((data, index) => (
      <th scope="col" key={index} style={{ 
        fontSize: "14px"  , 
        backgroundColor:"#E0E3E9" ,
        lineHeight: '100%', 
        letterSpacing: '0px', 
        fontWeight: 600, 
        color:"#202224",
        textAlign:"center"  ,
        justifyContent:"center",
        fontFamily:"Poppins, sans-serif",
        
        }}>
        {/* <div className="d-flex align-items-center"  > */}
          <span className="ms-1 align-items-center" >{data}</span>
        {/* </div> */}
      </th>
    ))}
  </tr>
</thead>
<tbody className=" text-center ms-2 tablestyle" style={{ fontSize: "14px" }}>
  {loading ? (
      <tr>
      <td colSpan="11">
        <LatestSekeltonLoader
         
        />
      </td>
    </tr>
  ) : filteredData?.length > 0 ? (
    paginatedData?.map((item, id) => (
    
            <tr key={id}>
              <td style={{ borderBottom: '1px solid #dee2e6' ,  }}>{(currentPage - 1) * itemsPerPage + id + 1}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' , lineHeight: '100%', 
            letterSpacing: '0px', 
            fontWeight: 400, 
            fontSize: "13px"  , 
            color:"#000000", 
            fontFamily:"Poppins, sans-serif",
            textAlign:"center" }}>{item.fteName}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.workingHours}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.breakHours}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.gazettedHolidays}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.annualLeaves}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.sickLeaves}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.casualLeaves}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.workingDays}</td>
              <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.fte}</td>
              <td style={{ borderBottom: "1px solid #dee2e6" ,               textAlign:"end"  ,
    }}>
    <div
    style={{
    border: "1px solid #D5D5D5",
    borderRadius: "10px",
    display: "flex",
    alignItems: "end", // Make children full height
    overflow: "hidden",
    justifyContent: "center",
    }}
    >
    <div
    className="w-50"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "7px",
      borderRight: "1px solid #D5D5D5", 
    
    }}
    >
    <EditIcon   style={{cursor:'pointer'}}    
     onClick={() => handleOpenModal(item.id)}
    />
    </div>
    
    <div
    className="w-50"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "7px",
    }}
    >
    <Deleticon 
    style={{cursor:'pointer'}} 
     onClick={() => handleDelete(item.id)} />
    </div>
    </div>
    </td>
    
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="11" style={{ borderBottom: '1px solid #dee2e6' }}>No data available</td>
          </tr>
        )}
  {}
</tbody>
</table>
</div>
<div className="d-flex justify-content-between ms-2 p-4 ps-3 pb-1 pt-0  align-items-start">
<div className="footer-text mt-3">
{filteredData?.length > 0 
    ? `Showing ${startIndex + 1}-${endIndex} of ${filteredData.length}`
    : 'Showing 0-0 of 0'} </div>

<div className="d-flex justify-content-end pb-4 ">
<div
style={{
border: "1px solid #D5D5D5",
backgroundColor:'#F9F9FB',
borderRadius: "10px",
display: "flex",
alignItems: "stretch",
overflow: "hidden",
justifyContent: "center",
}}
>
{/* Previous Button */}
<div
className="d-flex align-items-center px-3 p-2"
style={{
  borderRight: "1px solid #D5D5D5",
  cursor: currentPage > 1 ? "pointer" : "not-allowed",
  color: currentPage > 1 ? "#007BFF" : "#202224", // Blue if not on page 1
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "100%",
  letterSpacing: "0px",
}}
onClick={() => {
  if (currentPage > 1) handlePageChange(currentPage - 1);
}}
>
Previous
</div>

<ul className="pagination pagination-sm pb-0 mb-0 p-0 m-0">
{[...Array( Number.isInteger(totalPages) && totalPages > 0 
? totalPages 
: 0)].map((_, index) => (
  <li
    key={index}
    
    className={`page-item p-0 m-0 ${currentPage === index + 1 ? "active " : ""}`}
  >
    <button
 className="page-link p-3 pt-2 pb-2 rounded-0"
 style={{
        fontWeight: 600,
        fontSize: "15px",
        color: "#FFFFF",
        whiteSpace: "nowrap",
        height: "100%",
      }}
      onClick={() => handlePageChange(index + 1)}
    >
      {index + 1}
    </button>
  </li>
))}
</ul>

<div
className="d-flex align-items-center px-3"
style={{
  cursor: currentPage < totalPages ? "pointer" : "not-allowed",
  color: currentPage < totalPages ? "#007BFF" : "#202224", // Blue if not on last page
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "100%",
  letterSpacing: "0px",
  borderRight: "1px solid #D5D5D5",
}}
onClick={() => {
  if (currentPage < totalPages) handlePageChange(currentPage + 1);
}}
>
Next
</div>
</div>
</div>

</div>
</div>
) : (
  < Depfte 
onBack={() => setactiveAddModal(true)}
/>))}

{/* 
{activeEdit && <DepartmentFTEModal
active={activeEdit} 
setActive={(value)=>setactiveEdit(value)}
selectedId={deleteid}
/>} */}

    </>
    
  );
}


export default Deporganizationlist