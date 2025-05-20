import { useEffect, useState , useRef } from "react";
import "../Estimation.css";
import { ReactComponent as Deleticon } from '../../../assets/WfoAssets/SVG/Delete.svg';  
import { ReactComponent as EditIcon } from '../../../assets/WfoAssets/SVG/Edit.svg'; 
// import { ReactComponent as Dropdownicon } from '../../assets/WfoAssets/SVG/SidebarVector.svg';  
const arrData = [
  
  "S.No",
  "Resource",
  "Total Hrs",
  "Number Of Resources",
  "Annual Cost",
];
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
const Estimationdetail = ({ Estimationreport  ,Reportshow ,    Currency}) => {

  const lastItem = Estimationreport[Estimationreport.length - 1];
  const [numberOfResources, setNumberOfResources] = useState(0);
  const [annualCost, setannualCost] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
  
    const [showSearch, setShowSearch] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const [selectedColumn, setSelectedColumn] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
      if (!selectedColumn || searchValue.trim() === '') {
        setFilteredData(Estimationreport);
      } else {
        const lowerSearch = searchValue.toLowerCase();
        const dataProperty = columnMap[selectedColumn];
        
        const filtered = Estimationreport?.filter((item) => {
          const value = item[dataProperty]?.toString().toLowerCase();
          return value?.includes(lowerSearch);
        });
        
        setFilteredData(filtered);
      }
    }, [selectedColumn, searchValue, Estimationreport]);
     
    const dropdownRef = useRef(null); 
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    const itemsPerPage = 4; 
    
    const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Estimationreport?.length === 0
      ? 0
      : Math.min(startIndex + itemsPerPage, Estimationreport?.length);
    
      const paginatedData = Array.isArray(filteredData) ? filteredData.slice(startIndex, endIndex) : [];  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  useEffect(() => {
    if (lastItem && lastItem.numberOfResources !== undefined) {
      setNumberOfResources(lastItem.numberOfResources);
      setannualCost(lastItem.annualCost);
    }
  }, [lastItem]);

  return (
    <div className="container-fluid pt-0">
    <div className="row  ms-0 row-cols-1 row-cols-sm-2 row-cols-md-3   g-2 mb-2">

{Reportshow &&
 <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
        <div className="card overflow-hidden">
          <div className="card-header p-4 chart-color1 text-light border-bottom-0 text-center">
            <span className="  fw-bold ">Report Summery</span>
          </div>
          <div className="card-body text-center  mt-1">
            <span className="text-muted ">Your Required Resources</span>
            <div id="lblRequiredResources" className="fs-20 chart-text-color1 display-5 d-flex justify-content-center mt-2">
              {Math.round(numberOfResources * 100) / 100}
            </div>
            <span className="text-muted  d-flex justify-content-center mt-4">Total Cost  <h1 className="ms-2 mt-" style={{fontSize:"15px" , color:"#4880FF" , fontWeight:"700"}}> {Currency}</h1></span>
            <div id="lblTotalCost" className="fs-20 chart-text-color1 display-5 mt-2">
            {Math.round((annualCost + Number.EPSILON) * 100) / 100}  
            
                      </div>
          </div>
        </div>
      </div>
}
     

      
      <div className={` ${Reportshow? "col-sm-12 col-md-6 col-lg-8 col-xl-9 col-xxl-9":"col-md-12 col-sm-12 col-12" }`}>
        <div className="card shadow mb-0 dropdown ">
          <div className=" ms-3 py-3">
          <p className="mb-1"
           style={{ 
             fontWeight: 600, 
             fontSize: '18px', 
             lineHeight: '100%', 
             letterSpacing: '0px', 
             color:"#000000",
             fontFamily:"Poppins, sans-serif",
           }}
             >Estimation  Report</p>          </div>
          <div className="ms-3 me-3 overflow-auto pt-0" style={{ maxHeight: 236 }}>
           
              <table id="tblDepartmentFte"  className="table    table-hover table-striped pb-1" style={{borderRadius:"10px"}}>
                 <thead  >
                   <tr style={{ border: "1px solid #dee2e6" , borderRadius:"10px"  }}>
                     {arrData.map((data, index) => (
                       <th scope="col" key={index}
                        style={{ 
                         fontSize: "15px"  , 
                         backgroundColor:"#E0E3E9" ,
                         lineHeight: '100%', 
                         letterSpacing: '0px', 
                         fontWeight: 600, 
                         color:"#202224",
                         textAlign:"end" ,
                         justifyContent:"center",
                         fontFamily:"Poppins, sans-serif",
                         }}
                         >
                         {/* <div className="d-flex align-items-center"  > */}
                         <span className="d-flex align-items-center ms-1">
  <span>{data}</span>
  {data?.toLowerCase().includes("annual cost") && (
    <span
      className="ms-2"
      style={{ fontSize: "15px", color: "#4880FF", fontWeight: "700" }}
    >
      {Currency}
    </span>
  )}
</span>
                         {/* </div> */}
                       </th>
                     ))}
                   </tr>
                 </thead>
   <tbody className=" text-center  tablestyle" style={{ fontSize: "14px" }}>
        {/* {loading && <tr>Loading...</tr>} */}
        {filteredData?.length > 0 ? (
          paginatedData?.map((item, id) => (
            <tr key={id}>
              <td  style={{ borderBottom: '1px solid #dee2e6' ,  textAlign:"start" , paddingLeft:'20px'  }}>{(currentPage - 1) * itemsPerPage + id + 1}</td>
              <td style={{ 
                borderBottom: '1px solid #dee2e6', 
                lineHeight: '100%', 
                letterSpacing: '0px', 
                fontWeight: 400, 
                fontSize: "13px"  , 
                color:"#000000", 
                fontFamily:"Poppins, sans-serif",
                textAlign:"start" ,
                 paddingLeft:'15px',
              }}>
{item.resourcesName}              </td>
              <td style={{ borderBottom: '1px solid #dee2e6' ,  textAlign:"start" ,  paddingLeft:'15px'  }}>{item.totalHours}</td>
              <td style={{ borderBottom: '1px solid #dee2e6',  textAlign:"start" ,  paddingLeft:'15px' }}>{Math.round(item.numberOfResources * 100) / 100}</td>
              <td style={{ borderBottom: '1px solid #dee2e6',  textAlign:"start" ,  paddingLeft:'15px'  }}>{item.annualCost}</td>
              
              {/* <td style={{ borderBottom: "1px solid #dee2e6", textAlign:"end" }}>
                <div
                  style={{
                    border: "1px solid #D5D5D5",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "end",
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
                      style={{cursor:'pointer'}} 
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
                    <Deleticon style={{cursor:'pointer'}} onClick={() => handleDelete(item.id)} />
                  </div>
                </div>
              </td> */}
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
      </div>
    </div>
  </div>
  );
};

export default Estimationdetail;
