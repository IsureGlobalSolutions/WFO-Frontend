import React, { useState, useEffect } from "react";
import { GetReportcalculation } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import Loader from "../../plugins/Loader";

const Estimationreportheader = ({ Filedata, ftefilename, setEstimationreport, setFiledata, Radiobutton, Currency, setReportshow }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("nav_week3");
  const [loading, setLoading] = useState(true);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // You can adjust this number
  
  // Reset pagination when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handleTabClick = (category, tabId) => {
    console.log("🚀 ~ handleTabClick ~ tabId:", tabId);
    setActiveTab(tabId);
    dispatch(GetReportcalculation({ selectedfile: ftefilename, category: category, type: Radiobutton }))
      .then((response) => {
        if (response && response.payload && response.payload.data) {
          const blobData = response.payload.data;
          const reader = new FileReader();
          reader.onload = () => {
            const jsonData = reader.result;
            const parsedData = JSON.parse(jsonData);
            console.log(parsedData, "parsedData");
            setEstimationreport(parsedData.reportCalculations);
            setFiledata(parsedData.data);
            setLoading(false);
            setCurrentPage(1); // Reset to first page when data changes
            if (tabId === "nav_week3") {
              setReportshow(true);
            } else {
              setReportshow(false);
            }
          };
          reader.readAsText(blobData);
        }
      });
  };

  // Common function to process and filter rows
  const processRows = (data) => {
    if (!data || data.length === 0) return [];
    
    return data
      .map((row) => {
        if (!Array.isArray(row)) {
          console.error('Row is not an array:', row);
          return null;
        }
        const filteredRow = row.slice();
        if (filteredRow.length >= 2 && !filteredRow[filteredRow.length - 1] && !filteredRow[filteredRow.length - 2]) {
          filteredRow.splice(-2, 2);
        }
        return filteredRow;
      })
      .filter(row => row && Array.isArray(row) && row.some(cell => cell));
  };

  // Pagination logic
  const getCurrentRows = (data) => {
    const processedRows = processRows(data);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return {
      rows: processedRows.slice(startIndex, endIndex),
      total: processedRows.length
    };
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Common table render function
  const renderTable = (data) => {
    const { rows } = getCurrentRows(data);
    
    return (
      <table className="table table-hover table-striped pb-1" style={{ borderRadius: "10px" }}>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`data-row ${rowIndex === 0 ? 'bg-lighttest' : ''}`}
              >
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className="data-cell"  
                    style={{
                      fontSize: "14px",
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      backgroundColor: rowIndex === 0 ? "#E0E3E9" : "", // Bold for header row
                      fontWeight: rowIndex === 0 ? "600" : "400", // Bold for header row
                      color: "#202224",
                      textAlign: "center",
                      justifyContent: "center",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <td colSpan="9" style={{ 
              textAlign: 'center',
              padding: '10px',
             
              // border: '1px solid #dee2e6',
                       verticalAlign: 'middle',
                      //  backgroundColor:"#ECECEC"
          }}>
              No data available
          </td>
          )}
        </tbody>
      </table>
    );
  };

  // Render pagination controls
  const renderPagination = (data) => {
    const { total } = getCurrentRows(data);
    const totalPages = Math.ceil(total / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, total);

    if (total <= 0) return null;

    return (
      <div className="d-flex justify-content-between ms-2 p-4 ps-3 pb-1 pt-0 align-items-start">
        <div className="footer-text mt-3">
          Showing {startIndex + 1}-{endIndex} of {total}
        </div>

        <div className="d-flex justify-content-end pb-4">
          <div
            style={{
              border: "1px solid #D5D5D5",
              backgroundColor: '#F9F9FB',
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
              {[...Array(totalPages)].map((_, index) => (
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
    );
  };

  return (
    <div className="col-12 ms-3 pt-2 pe-4 pb-4">
      <div className="mb-4 pt-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <ul className="nav nav-tabs tab-card" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${activeTab === "nav_week3" ? "active" : ""}`}
                  id="myTabContent"
                  onClick={() => handleTabClick("", "nav_week3")}
                  data-bs-toggle="tab"
                  href="#nav_week3"
                  role="tab"
                  aria-selected={activeTab === "nav_week3"}
                  tabIndex={-1}
                >
                  File Data
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${activeTab === "nav_week4" ? "active" : ""}`}
                  onClick={() => handleTabClick("Tactical", "nav_week4")}
                  data-bs-toggle="tab"
                  href="#nav_week4"
                  role="tab"
                  aria-selected={activeTab === "nav_week4"}
                >
                  Tactical
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${activeTab === "nav_week5" ? "active" : ""}`}
                  onClick={() => handleTabClick("Transactional", "nav_week5")}
                  data-bs-toggle="tab"
                  href="#nav_week5"
                  role="tab"
                  aria-selected={activeTab === "nav_week5"}
                  tabIndex={-1}
                >
                  Transactional
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${activeTab === "nav_week6" ? "active" : ""}`}
                  onClick={() => handleTabClick("Strategy", "nav_week6")}
                  data-bs-toggle="tab"
                  href="#nav_week6"
                  role="tab"
                  aria-selected={activeTab === "nav_week6"}
                  tabIndex={-1}
                >
                  Strategy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-1" style={{ border: "1px solid #E9E9E9" }}>
          <div className="p-0">
            <div className="ps-0" style={{ 
              maxHeight: 350, 
              maxWidth: 1175,
              overflowX: 'auto',
              position: 'relative'
            }}>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${activeTab === "nav_week3" ? "show active" : ""} pt-0`}
                  id="nav_week3"
                  role="tabpanel"
                >
                  {renderTable(Filedata)}
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "nav_week4" ? "show active" : ""} pt-0`}
                  id="nav_week4"
                  role="tabpanel"
                >
                  {renderTable(Filedata)}
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "nav_week5" ? "show active" : ""} pt-0`}
                  id="nav_week5"
                  role="tabpanel"
                >
                  {renderTable(Filedata)}
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "nav_week6" ? "show active" : ""} pt-0`}
                  id="nav_week6"
                  role="tabpanel"
                >
                  {renderTable(Filedata)}
                </div>
              </div>
            </div>
          </div>
          {renderPagination(Filedata)}
        </div>
      </div>
    </div>
  );
};

export default Estimationreportheader;