import React, { useEffect, useState, useRef, useContext } from "react";
import Stickyheader from "../../upperheader/Stickyheader";
import "../adminscreenslist.css";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch , useSelector} from "react-redux";
import {
  getDepartmentData,
  getJobDepartmentiddata,
  deletedepartment,
} from "../../../redux/features/auth/authSlice";
import { GrView , GrClose } from "react-icons/gr";
import Deletemodel from "../../deletemodel/Deletemodel";
import { MdErrorOutline } from "react-icons/md";
import {Button , Modal } from "react-bootstrap";
import { ReactComponent as Deleticon } from '../../../assets/WfoAssets/SVG/Delete.svg';  
import { ReactComponent as EditIcon } from '../../../assets/WfoAssets/SVG/Edit.svg'; 
import { ReactComponent as Dropdownicon } from '../../../assets/WfoAssets/SVG/SidebarVector.svg';  
import { ReactComponent as PlusButton } from '../../../assets/WfoAssets/SVG/PlusButton.svg';  
import { ReactComponent as Veiw } from '../../../assets/WfoAssets/SVG/Veiw.svg';  

import { IoIosSearch } from "react-icons/io";
import DepartmentEdit from "../../HRAdminEditAPIs/DepartmentEdit";
import DepartmentApi from "./DepartmentApi";
import AuthContext from "../../../context/AuthProvider";
import PermissionsModal from "../../Modals/PermissionsModal";
import LatestSekeltonLoader from "../../SekeltonLoader/LatestSekeltonLoader";
const columnMap = {
 
  "Name": "name",
  "Description": "description",
  "Created Date": "createdDate",
 
};
const Departmentlist = ({ isSidebarExpanded }) => {
  const arrData = [
  
    "S.No",
    "Name",
    "Description",
    "Created Date",
    "Action"
  ];
  const [employeesPerPage, setEmployeesPerPage] = useState(5);
 
  const dispatch = useDispatch();
  const { permissions } = useContext(AuthContext);
  
  // Check permissions
  const ftePermission = permissions?.userPermissions?.find(
    perm => perm.permissionName === "Department"
  ) || { subPermissions: [{ subPermissionName: "Add" }, { subPermissionName: "Edit" }, { subPermissionName: "Delete" }, { subPermissionName: "View" }] };
  
  
  const canAddFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Add");
  const canEditFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Edit");
  const canDeleteFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Delete");
  const canViewFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "View");
  


  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [datalist, setdatalist] = useState([]);
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [openId, setOpenId] = useState(null);
  const [datalistid, setdatalistid] = useState([]);
 const DepartmentNames = useSelector((state) => state.auth.Departmentname);
  useEffect(() => {
    // Initialize data by fetching sub-departments
    dispatch(getDepartmentData());
  }, []);

  useEffect(() => {
    // Update local data when Redux store changes
    if (DepartmentNames) {
      setFilteredData(DepartmentNames);
    }
  }, [DepartmentNames]);
  const loading = useSelector((state) => state.auth.loading);
      const [currentPage, setCurrentPage] = useState(1);
      const [showSearch, setShowSearch] = useState(false);
      const [dropdownOpen, setDropdownOpen] = useState(false);
     const [activeEdit, setactiveEdit] = useState(false);

      const [selectedColumn, setSelectedColumn] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
      if (!selectedColumn || searchValue.trim() === '') {
        setFilteredData(datalist);
      } else {
        const lowerSearch = searchValue.toLowerCase();
       
        const dataProperty = columnMap[selectedColumn];
      
        const filtered = datalist?.filter((item) => {
          const value = item[dataProperty]?.toString().toLowerCase();
          return value?.includes(lowerSearch);
        });
        
        setFilteredData(filtered);
      }
    }, [selectedColumn, searchValue, datalist]);
     
      const [selectedOption, setSelectedOption] = useState();
      const dropdownRef = useRef(null); 
       const [activeAddModal, setactiveAddModal] = useState(false);
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
  
    const itemsPerPage = 5; 
    const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = datalist?.length === 0
      ? 0
      : Math.min(startIndex + itemsPerPage, datalist?.length); // not paginatedData.length
    
      const paginatedData = filteredData?.slice(startIndex, endIndex);
   
    
   
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
 
  const fetchmethod = async (e) => {
    try {
      dispatch(getDepartmentData()).then((response) => {
        console.log(response, "getdatalist");
        setdatalist(response.payload);
      });
    } catch (error) {
      alert("error");
    }
  };
  useEffect(() => {
    fetchmethod();
  }, [deleteTrigger]);

  
  const fetchdataid = async (id) => {
    try {
     const response = await dispatch(getJobDepartmentiddata(id));
        setdatalistid(response.payload);
    } catch (error) {
      alert("error");
    }
  };
  const handleShow = async (id) => {
    setveiwmodel(true);
    await fetchdataid(id);    
    setveiwmodel(true);
};
const [veiwmodel, setveiwmodel] = useState(false);
const [deleteid, setdeleteid] = useState(null)
  const conformDelete = async () => { 
    try {
      const response = await dispatch(deletedepartment(deleteid));
      if (response.payload.isSuccess){
          setShow(false);
       }else{
          setShow(false);
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
    setdeleteid(id);    
  };
  const handleClosedata = () => setShow(false);
  const handlecloseveiwmodel =()=>setveiwmodel(false);
  const handleOpenModal = (id) => {
    if (!canEditFTE) {
      setShowPermissionModal(true);
      return;
    }
    setactiveEdit(true);
    setdeleteid(id);
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
             <Modal show={veiwmodel} onHide={handleClosedata}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "25px", fontWeight: "600" }}>Team Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {datalistid ? (
  <div>
    <div className="d-flex">
      <div className=" col-md-3 col-lg-3" style={{ fontSize: "15px", fontWeight: "bold" }}>ID</div>
      <div className="ms-4">{datalistid.id}</div>
    </div>
    <div className="d-flex">
      <div className=" col-lg-3 col-md-3" style={{ fontSize: "15px", fontWeight: "bold" }}>Name</div>
      <div className="ms-4">{datalistid.name}</div>
    </div>
    <div className="d-flex">
      <div className=" col-lg-3 col-md-3" style={{ fontSize: "15px", fontWeight: "bold" }}>Description</div>
      <div className="ms-4">{datalistid.description}</div>
    </div>
    <div className="d-flex">
      <div className=" col-lg-3 col-md-3" style={{ fontSize: "15px", fontWeight: "bold" }}>Created Date</div>
      <div className="ms-4">{datalistid.createdDate}</div>
    </div>
    <div className="d-flex">
      <div className=" col-lg-3 col-md-3" style={{ fontSize: "15px", fontWeight: "bold" }}>Modified Date</div>
      <div className="ms-4">{datalistid.modifiedDate}</div>
    </div>
    <div className="d-flex">
      <div className=" col-lg-3 col-md-3" style={{ fontSize: "15px", fontWeight: "bold" }}>Created By</div>
      <div className="ms-4">{datalistid.createdBy}</div>
    </div>
  </div>
) : (
  <p>Loading...</p>
)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlecloseveiwmodel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

     <div style={{backgroundColor:"#FFFFFF" ,  marginTop:"2px" }} >
      <div className="ps-4 p-3">
      <DepartmentApi/>

      </div>
      </div>
      <div style={{backgroundColor:"#FFFFFF", marginTop:"3px" }}  >

              <div className="d-flex  justify-content-between align-items-center ms-2 p-4 ps-3 pb-0 mb-1 " >
              <p className="mb-1"
      style={{ 
        fontWeight: 600, 
        fontSize: '22px', 
        lineHeight: '100%', 
        letterSpacing: '0px', 
        color:"#000000",
        fontFamily:"Poppins, sans-serif",
      }}
        >Department List</p>
        <div className=" d-flex">
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
            {arrData
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
                        <LatestSekeltonLoader/>
                      </td>
                    </tr>
                  ) : filteredData?.length > 0 ? (
        paginatedData?.map((item, id) => (
      
                    <tr key={id}>
                      <td style={{ borderBottom: '1px solid #dee2e6' , alignItems:"center"  }}>{(currentPage - 1) * itemsPerPage + id + 1}</td>
                      <td style={{ borderBottom: '1px solid #dee2e6' , lineHeight: '100%', 
                    letterSpacing: '0px', 
                    fontWeight: 400, 
                    fontSize: "13px"  , 
                    color:"#000000", 
                    fontFamily:"Poppins, sans-serif",
                    textAlign:"center" }}>{item.name}</td>
                      <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.description}</td>
                      <td style={{ borderBottom: '1px solid #dee2e6' }}>{new Date(
                                      item.createdDate
                                    ).toLocaleDateString()}</td>
                      <td style={{ borderBottom: "1px solid #dee2e6" , width:"150px" , textAlign:"end"  ,}}>
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
            <EditIcon                     onClick={() => handleOpenModal(item.id)}
       />
          </div>
      
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
            <Deleticon onClick={() => handleDelete(item.id)} />
          </div>
          {/* <div
            className="w-50"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "7px",
            }}
          >
            <Veiw onClick={() =>
                                     handleShow(item.id)
                                    } />
          </div> */}
        </div>
      </td>
      
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" style={{ borderBottom: '1px solid #dee2e6' }}>No data available</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between ms-2 p-4 ps-3 pb-1 pt-0  align-items-start">
        <div className="footer-text mt-3">
        {filteredData?.length > 0 
    ? `Showing ${startIndex + 1}-${endIndex} of ${filteredData.length}`
    : 'Showing 0-0 of 0'} 
                   </div>
      
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
      
      {
        activeEdit && 
        <DepartmentEdit 
        active={activeEdit} 
        setActive={(value)=>setactiveEdit(value)}
        EditId={deleteid}
        />
      }
       
      

    </>
  );
};




export default Departmentlist;
