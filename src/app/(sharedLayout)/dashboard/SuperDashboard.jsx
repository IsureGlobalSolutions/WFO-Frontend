import React, { useEffect, useState, useRef } from "react";
import "../../../component/adminside/adminscreenslist.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ApproveUser,
  DeactivateUser,
  GetAllactiveUsers,
  GetAllInactiveUsers
} from "../../../redux/features/auth/authSlice";
import '../../../component/dashbored/updatedashbored.css';
import { Button, Modal } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { ReactComponent as Dropdownicon } from '../../../assets/WfoAssets/SVG/SidebarVector.svg';   
import toast from "react-hot-toast";
import LatestSekeltonLoader from "../../../component/SekeltonLoader/LatestSekeltonLoader";

const columnMap = {
  "Email": "userName",
  "Name": "firstName",
  "Phone Number": "phoneNumber",
  "Address": "address",
  "Country": "country",
};

const SuperDashboard = ({ isSidebarExpanded }) => {
  const arrData = [
    "S.No",
    "Email",
    "Name",
    "Address",
    "Country",
    "Status"
  ];
  
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("All Active");
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const dropdownRef = useRef(null);
  const itemsPerPage = 5;

  const availableTabs = ["All Active", "All Inactive"];
  
  // Fetch data based on current tab
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (currentTab === "All Active") {
          const response = await dispatch(GetAllactiveUsers());
          setDatalist(response.payload || []);
        } else {
          const response = await dispatch(GetAllInactiveUsers());
          setDatalist(response.payload || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [currentTab, dispatch]);

  // Filter data based on search
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
      
      setFilteredData(filtered || []);
    }
  }, [selectedColumn, searchValue, datalist]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData?.length || 0);
  const paginatedData = filteredData?.slice(startIndex, endIndex) || [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(1);
    setSelectedColumn('');
    setSearchValue('');
  };

  const handleApproveUser = async (userId) => {
    try {
      setLoading(true);
      // Prepare the request body as an array with the userId
      const requestBody = [userId];
      
      // Dispatch the ApproveUser action with the request body
      const response = await dispatch(ApproveUser(requestBody));
      
      if (response.payload?.isSuccess) {
        toast.success(response?.payload.alertMessage);  

        // Refresh the data after successful approval
        if (currentTab === "All Inactive") {
          const newData = await dispatch(GetAllInactiveUsers());
          setDatalist(newData.payload || []);
        } else {
          const newData = await dispatch(GetAllactiveUsers());
          setDatalist(newData.payload || []);
        }
      } else {
        // Handle error case
        console.error("Failed to approve user");
      }
    } catch (error) {
      console.error("Error approving user:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleDeactivateUser = async (userId) => {
    try {
      setLoading(true);
      // Prepare the request body as an array with the userId
      const requestBody = [userId];
      
      // Dispatch the ApproveUser action with the request body
      const response = await dispatch(DeactivateUser(requestBody));
      
      if (response.payload?.isSuccess) {
        // Refresh the data after successful approval
        toast.success(response?.payload.alertMessage);  
        if (currentTab === "All Inactive") {
          const newData = await dispatch(GetAllInactiveUsers());
          setDatalist(newData.payload || []);
        } else {
          const newData = await dispatch(GetAllactiveUsers());
          setDatalist(newData.payload || []);
        }
      } else {
        // Handle error case
        console.error("Failed to approve user");
      }
    } catch (error) {
      console.error("Error approving user:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="childsection">
        <h1>All Users Detail</h1>
        {availableTabs.length > 0 && (
          <div className="">
            <div className="row g-0">
              {availableTabs.map((item) => (
                <div className="col-12 col-sm-2 d-flex align-items-center" key={item}>
                  <button
                    type="button"
                    className={`w-100 childbutton p-3 ${currentTab === item ? 'active' : ''}`}
                    onClick={() => handleTabChange(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{backgroundColor:"#FFFFFF", border:"1px solid #E0E3E9" , marginTop:"1px"}} >
        <div className="d-flex justify-content-between align-items-center ms-2 p-4 ps-3 pb-0 mb-1">
          <p className="mb-1" style={{ 
            fontWeight: 600, 
            fontSize: '18px', 
            lineHeight: '100%', 
            letterSpacing: '0px', 
            color:"#000000",
            fontFamily:"Poppins, sans-serif",
          }}>
            {currentTab === "All Active" ? "All Active Users List" : "All Inactive Users List"}
          </p>
          
          <div className="d-flex">
            <div className="d-flex justify-content-end ms-2 ps-3 pb-0 pt-0 pe-0 me-0 position-relative">
              <div style={{
                border: "1px solid #D5D5D5",
                borderRight:"0px",
                backgroundColor:'#F9F9FB',
                borderRadius: "10px 0px 0px 10px",
                display: "flex",
                alignItems: "stretch",
                overflow: "hidden",
                justifyContent: "center",
              }}>
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
                style={{ 
                  position: "relative",
                  border: "1px solid #D5D5D5",
                  backgroundColor:'#F9F9FB',
                  borderRadius: "0px 10px 10px 0px",
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {selectedColumn || "Select"}
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
                      .filter(item => item !== "S.No" && item !== "Status")
                      .map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedColumn(item);
                            setShowSearch(true);
                            setSearchValue('');
                            setDropdownOpen(false);
                          }}
                          style={{
                            padding: "8px 12px",
                            borderBottom: idx !== arrData.length - 1 ? "1px solid #D5D5D5" : "none",
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
        
        <div className="d-flex ms-2 p-4 ps-3 pb-0 pt-0 pe-4 align-items-start">
  <table className="table table-hover table-striped pb-1" style={{borderRadius:"10px"}}>
    <thead>
      <tr style={{ border: "1px solid #dee2e6", borderRadius:"10px" }}>
        {arrData.map((data, index) => (
          <th 
            scope="col" 
            key={index} 
            style={{ 
              fontSize: "14px",
              backgroundColor:"#E0E3E9",
              lineHeight: '100%',
              letterSpacing: '0px',
              fontWeight: 600,
              color:"#202224",
              textAlign:"center", // Changed from "center" to "left"
              justifyContent:"flex-start", // Changed from "center" to "flex-start"
              fontFamily:"Poppins, sans-serif",
              // paddingLeft: "16px" 
            }}
          >
            <span className="ms-1 align-items-center">{data}</span>
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="text-start  tablestyle" style={{ fontSize: "14px" }}> {/* Changed className from "text-center" to "text-start" */}
      {loading && <tr><td colSpan={arrData.length}><LatestSekeltonLoader/></td></tr>}

      {!loading && filteredData?.length === 0 && (
        <tr><td colSpan={arrData.length} style={{ 
          textAlign: "center", // Added to align left
        }}>No data available</td></tr>
      )}
      {!loading && paginatedData?.map((item, id) => (
        <tr key={id} className="align-middle">
          <td style={{ 
            borderBottom: '1px solid #dee2e6',
            textAlign: "center", // Added to align left
            paddingLeft: "16px" // Added to maintain spacing from left
          }}>
            {(currentPage - 1) * itemsPerPage + id + 1}
          </td>
          <td style={{ 
            borderBottom: '1px solid #dee2e6',
            lineHeight: '100%',
            letterSpacing: '0px',
            fontWeight: 400,
            fontSize: "13px",
            color:"#000000",
            fontFamily:"Poppins, sans-serif",
            textAlign:"center", // Changed from "center" to "center"
            paddingLeft: "16px" // Added to maintain spacing from left
          }}>
            {item.userName}
          </td>
          <td style={{ 
            borderBottom: '1px solid #dee2e6',
            textAlign: "center", // Added to align left
            paddingLeft: "16px" // Added to maintain spacing from left
          }}>
            {item.firstName} {item.lastName}
          </td>
          <td style={{ 
            borderBottom: '1px solid #dee2e6',
            textAlign: "center", // Added to align left
            paddingLeft: "16px" // Added to maintain spacing from left
          }}>
            {item.address}
          </td>
          <td style={{ 
            borderBottom: '1px solid #dee2e6',
            textAlign: "center", // Added to align left
            paddingLeft: "16px" // Added to maintain spacing from left
          }}>
            {item.country}
          </td>
          <td style={{ 
            textAlign: "center", // Added to align left
            paddingLeft: "16px" // Added to maintain spacing from left
          }}>
            {currentTab === "All Inactive" ? (
              <button
                className="save-button"
                onClick={() => handleApproveUser(item.id)}
                disabled={loading}
              >
                Activate User
              </button>
            ) : (
              <button
                className="save-button ms-0"
                onClick={() => handleDeactivateUser(item.id)}
              >Active</button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        
        <div className="d-flex justify-content-between ms-2 p-4 ps-3 pb-1 pt-0 align-items-start">
          <div className="footer-text mt-3">
            Showing {filteredData.length > 0 ? startIndex + 1 : 0}-{endIndex} of {filteredData.length}
          </div>
          
          <div className="d-flex justify-content-end pb-4">
            <div style={{
              border: "1px solid #D5D5D5",
              backgroundColor:'#F9F9FB',
              borderRadius: "10px",
              display: "flex",
              alignItems: "stretch",
              overflow: "hidden",
              justifyContent: "center",
            }}>
              {/* Previous Button */}
              <div
                className="d-flex align-items-center px-3 p-2"
                style={{
                  borderRight: "1px solid #D5D5D5",
                  cursor: currentPage > 1 ? "pointer" : "not-allowed",
                  color: currentPage > 1 ? "#007BFF" : "#202224",
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
                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item p-0 m-0 ${currentPage === index + 1 ? "active" : ""}`}
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
                  color: currentPage < totalPages ? "#007BFF" : "#202224",
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
    </>
  );
};

export default SuperDashboard;