import { useEffect, useState , useRef, useContext} from "react";
import Stickyheader from "../../upperheader/Stickyheader";
import "./costingreport.css";
import {
  getFteFileNames,
  getdesignationdata,
  Addtotalcost,
  Costdelete,
  GetAllCostingByFile,
} from "../../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Deletemodel from "../../deletemodel/Deletemodel";
import { ReactComponent as Deleticon } from '../../../assets/WfoAssets/SVG/Delete.svg';  
import { ReactComponent as EditIcon } from '../../../assets/WfoAssets/SVG/Edit.svg'; 
import { ReactComponent as Dropdownicon } from '../../../assets/WfoAssets/SVG/SidebarVector.svg';  
import { ReactComponent as PlusButton } from '../../../assets/WfoAssets/SVG/PlusButton.svg';  
import { ReactComponent as Veiw } from '../../../assets/WfoAssets/SVG/Veiw.svg';  
import { IoIosSearch } from "react-icons/io";
import CostingEdit from "./CostingEdit";
import PermissionsModal from "../../Modals/PermissionsModal";
import AuthContext from "../../../context/AuthProvider";
import LatestSekeltonLoader from "../../SekeltonLoader/LatestSekeltonLoader";
const arrData = [
  
  "S.No",
  "File Name",
  "Job-Title",
  "Created By",
  "Total Cost",
  "Action"
];
const CostingReport = ({ selectedModule }) => {
  const dispatch = useDispatch();
  const { permissions } = useContext(AuthContext);
  const ftePermission = permissions?.userPermissions?.find(
    perm => perm.permissionName === "Costing"
  ) || { subPermissions: [{ subPermissionName: "Add" }, { subPermissionName: "Edit" }, { subPermissionName: "Delete" }, { subPermissionName: "View" }] };
  
  
  const canAddFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Add");
  const canEditFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Edit");
  const canDeleteFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Delete");
  const canViewFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "View");
  


  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const filenames = useSelector((state) => state.auth.filenames);
  const [IsLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const costdatalist = useSelector((state) => state.auth.costdatalist) || [];
  console.log("🚀 ~ CostingReport ~ costdatalist:", costdatalist)
  const [selectedFile, setSelectedFile] = useState("");
  const [filedata, setfiledata] = useState([]);
  const [designationname, setdesignationname] = useState("");
  const [costname, setcostname] = useState("");
  const [selectdesignation, setselectdesignation] = useState("");
  const [deleteid, setdeleteid] = useState("");
  const [Currency, setCurrancy] = useState("");
  const loading = useSelector((state) => state.auth.loading);

   const [currentPage, setCurrentPage] = useState(1);
        const [showSearch, setShowSearch] = useState(false);
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const [selectedColumn, setSelectedColumn] = useState('');
      const [searchValue, setSearchValue] = useState('');
      const [filteredData, setFilteredData] = useState([]);
      useEffect(() => {
        if (!selectedColumn || searchValue.trim() === '') {
          setFilteredData(costdatalist);
        } else {
          const lowerSearch = searchValue.toLowerCase();
         
          const filtered = costdatalist.filter((item) => {
            console.log("Checking:", item[selectedColumn]);
            return item[selectedColumn]?.toString().toLowerCase().includes(lowerSearch);
          });
          
          setFilteredData(filtered);
        }
      }, [selectedColumn, searchValue, costdatalist]);
      const [touchedFields, setTouchedFields] = useState({
        file: false,
        designation: false,
        cost: false
      });
        const [selectedOption, setSelectedOption] = useState();
        const dropdownRef = useRef(null); 
         const [activeEdit, setactiveEdit] = useState(false);
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
        const handlecost = (e) => {
          if (!canAddFTE) {
            setShowPermissionModal(true);
            return;
          }
          if (isSubmitting) return; // Prevent multiple submissions
          
          setTouchedFields({
            file: true,
            designation: true,
            cost: true
          });
        
          if (!selectedFile || !costname || !selectdesignation) {
            toast.error("Please fill all required fields.");
            return;
          }
          
          setIsSubmitting(true);
          
          dispatch(Addtotalcost(constdata)).then((response) => {
            if (response.payload?.isSuccess) {
              return dispatch(GetAllCostingByFile(selectedFile)); // Return the promise
            } else {
              throw new Error(response.payload?.alertMessage);
            }
          })
          .then(() => {
            setcostname("");
          })
          .catch((error) => {
            // toast.error(error.message || "An error occurred while adding cost");
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        };
      const itemsPerPage = 5; 
      const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = filteredData?.length === 0
  ? 0
  : Math.min(startIndex + itemsPerPage, filteredData?.length);
 // not paginatedData.length
      
        const paginatedData = filteredData?.slice(startIndex, endIndex);
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
  const [constdata, setconstdata] = useState({
    cost: "",
    designationName: "",
  });
  const getdesignationname = (e) => {
    const name = e.target.value;
    const value = name.split("JD |")[1].trim();
    setdesignationname(value);
    setselectdesignation(name);
    setconstdata(() => ({
      designationName: value,
      fileName: selectedFile,
    }));
  };
  const getFteFileName = (e) => {
    const value = e.target.value;
    console.log("value34", value);
    setSelectedFile(value);

    const Currency =
      e.target.options[e.target.selectedIndex].getAttribute("name");
    let currency = "";
    if (Currency === "Pakistan") {
      currency = "PKR";
    } else if (Currency === "UAE") {
      currency = "AED";
    } else if (Currency === "Saudi Arabia") {
      currency = "SAR";
    } else if (Currency === "Canada") {
      currency = "CA$";
    } else if (Currency === "USA") {
      currency = "$";
    }
    setCurrancy(currency);
    console.log(value, "valuedata");
    if (value) {
      dispatch(getdesignationdata(value)).then((response) => {
        if (response.payload && response.payload.length > 0) {
          const respondata = response.payload[0];
          setfiledata(respondata);
        } else {
        }
      });
    }
  };

  useEffect(() => {
    dispatch(getFteFileNames());
  }, []);
  const jdColumns = filedata.filter((col) => col.startsWith("JD |"));


  useEffect(() => {
    dispatch(GetAllCostingByFile(selectedFile));
  }, [selectedFile]);

  const handlename = (e) => {
    const name = parseFloat(e.target.value);
    setconstdata((prevdata) => ({
      ...prevdata,
      cost: name,
    }));
    setcostname(name);
  };
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [show, setShow] = useState(false);
  const handleDelete = async (id) => {
    if (!canDeleteFTE) {
      setShowPermissionModal(true);
      return;
    }
    setShow(true);
    setdeleteid(id);
  };
  const conformDelete = async () => {
    try {
      const response = await dispatch(Costdelete(deleteid));
      if (response.payload.isSuccess) {
        setShow(false);
        dispatch(GetAllCostingByFile(selectedFile));
      } else {
        setShow(false);
      }
      setDeleteTrigger((prev) => !prev);
    } catch (error) {}
    setdeleteid(null);
  };
  const handleClosedata = () => setShow(false);
  const handleOpenModal = (id) => {
    if (!canEditFTE) {
      setShowPermissionModal(true);
      return;
    }
    setactiveEdit(true)
    setdeleteid(id)
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
      <div className="childsection pb-2">
        <h1>Costing </h1>
      </div>

      <div
        className="d-flex p-3 mb-1  topnavbar-card"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "5.83px 5.83px 52.51px 0px #0000000D",
          // borderRadius: "10px",
          width: "100%", // Full width
          justifyContent: "start", // Horizontally center content
          alignItems: "center", // Vertically center content
          flexWrap: "nowrap", // Prevent wrapping
          whiteSpace: "nowrap", // Prevent text wrapping
        }}
      >
        <h1 style={{ margin: 0 }}>Home</h1>
        <h1 className="ms-1 me-1" style={{ margin: 0 }}>
          /
        </h1>
        <h1 style={{ margin: 0 }}>Estimation</h1>
        <h1 className="ms-1 me-1" style={{ margin: 0 }}>
          /
        </h1>
        <h1 style={{ color: "#4880FF", margin: 0 }}>{selectedModule}</h1>
      </div>
      <div
        className="mt-1 "
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        
            <div className="row col-12">
              <div className="col-12" style={{ marginTop: 12 }}>
                <div className=" mb-0 ">
                  <p
                    className="ms-4 p-4 ps-2 pt-3 pb-2 mb-1"
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0px",
                      color: "#000000",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Add Costing
                  </p>
                  <div className="ms-4 gap-2 d-flex p-4 ps-2 pt-4 pb-2 mb-1">
                  <div className="col-md-3">
              <p className="" style={{ 
            fontWeight: 600, 
            fontSize: '15px', 
            lineHeight: '100%', 
            letterSpacing: '0px', 
            color:"#606060",
            fontFamily:"Poppins, sans-serif",
          }}>Select File</p>
            <select
              id="department_Dropdown"
              className="form-select"
              onChange={getFteFileName}
              value={selectedFile}
              style={{
                border: '0.94px solid #D6D6D6',
                color: '#A3A3A3',
                borderRadius: '10px',
                padding: '10px 15px',
                height: '46px',
                cursor: 'pointer',
              }}
            >
              <option value="" style={{ color: '#A3A3A3' }}>Select a File Name</option>
              {filenames && filenames.length > 0 ? (
                                  filenames.map((item, index) => (
                                    <option
                                      key={index}
                                      value={item.name}
                                      name={item.country}
                                    >
                                      {item.name}
                                    </option>
                                  ))
                                ) : (
                                  <div></div>
                                )}
            </select>
          </div>
          <div className="col-md-3">
              <p className="" style={{ 
            fontWeight: 600, 
            fontSize: '15px', 
            lineHeight: '100%', 
            letterSpacing: '0px', 
            color:"#606060",
            fontFamily:"Poppins, sans-serif",
            whiteSpace:"nowrap"
          }}>Select Designation</p>
            <select
              id="department_Dropdown"
              className="form-select"
              onChange={getdesignationname}
              value={selectdesignation}
              style={{
                border: '0.94px solid #D6D6D6',
                color: '#A3A3A3',
                borderRadius: '10px',
                padding: '10px 15px',
                height: '46px',
                cursor: 'pointer',
              }}
            >
              <option value="" style={{ color: '#A3A3A3' }}>Select a File Name</option>
              {filedata?.length > 0 &&
                                  jdColumns?.length > 0 &&
                                  jdColumns.map((col, optionIndex) => {
                                    const designation = col
                                      .split("JD |")[1]
                                      .trim();
                                    return (
                                      <option key={optionIndex} value={col}>
                                        {designation}
                                      </option>
                                    );
                                  })}
            </select>
          </div>
          <div className="col-md-3">
              <p className="" style={{ 
            fontWeight: 600, 
            fontSize: '15px', 
            lineHeight: '100%', 
            letterSpacing: '0px', 
            color:"#606060",
            fontFamily:"Poppins, sans-serif",
          }}> Cost</p>
           <input
                                id="txtCost"
                                type="number"
                                style={{
                                  border: '0.94px solid #D6D6D6',
                                  color: '#A3A3A3',
                                  borderRadius: '10px',
                                  padding: '10px 15px',
                                  height: '46px',
                                  cursor: 'pointer',
                                }}
                                className="form-control"
                                placeholder="Write a cost"
                                aria-label="Text input with dropdown button"
                                onChange={handlename}
                                value={costname}
                                min="0"
                              />
          
          </div>
          <div className="col-md-2  pe-2 d-flex align-items-end">
      
<button
  onClick={handlecost}
  disabled={!costname || !selectdesignation || !selectedFile || isSubmitting}
  className={`save-button w-75 d-flex justify-content-center align-items-center ${
    (!costname || !selectdesignation || !selectedFile) ? 'disabled-button' : ''
  }`}
  style={{
    height: '46px',
    borderRadius: '10px',
    fontWeight: 600,
    whiteSpace: "nowrap",
    opacity: (!costname || !selectdesignation || !selectedFile || isSubmitting) ? 0.6 : 1, 
    cursor: (!costname || !selectdesignation || !selectedFile || isSubmitting) ? 'not-allowed' : 'pointer'
  }}
>
  {isSubmitting ? 'Adding...' : 'Add Now'}
</button>

</div>
                  </div>
                  {/* </form> */}
                  <div style={{backgroundColor:"#FFFFFF" ,border:"1px solid #E0E3E9"}} className="mt-5 pe-0" >
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
                            >Costing List</p>
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
                  <div className="d-flex    p-4  align-items-start" >
                           
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
                      <span className="ms-1 align-items-center" >{data}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className=" text-center ms-2 tablestyle" style={{ fontSize: "14px" }}>
              {loading && <tr><td><LatestSekeltonLoader/></td></tr>}
              {filteredData?.length > 0 ? (
        paginatedData?.map((item, id) => (
      
                    <tr key={id}>
                      <td style={{ borderBottom: '1px solid #dee2e6' ,  }}>{(currentPage - 1) * itemsPerPage + id + 1}</td>
                      <td style={{ borderBottom: '1px solid #dee2e6' , lineHeight: '100%', 
                    letterSpacing: '0px', 
                    fontWeight: 400, 
                    fontSize: "13px"  , 
                    color:"#000000", 
                    fontFamily:"Poppins, sans-serif",
                    textAlign:"center" }}>{item.fileName}</td>
                      <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.designationName}</td>
                      <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.createdBy}</td>
                      <td style={{ borderBottom: '1px solid #dee2e6' }}>{item.cost}</td>
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
               <EditIcon                     
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
              borderRight: "1px solid #D5D5D5", 

            }}
          >
                        <Deleticon onClick={() => handleDelete(item.id)} />

         
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
                </div>
          </div>
        </div>
      </div>
      {activeEdit && 
      <CostingEdit 
      active={activeEdit} 
      setActive={(value)=>setactiveEdit(value)}
      EditId={deleteid}
      />
      }
    </>
  );
};

export default CostingReport;
