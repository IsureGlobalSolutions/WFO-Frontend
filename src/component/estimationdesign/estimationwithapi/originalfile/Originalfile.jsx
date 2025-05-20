import React, { useState } from 'react';

const Originalfile = ({ Veiwdata, Filename }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // You can adjust this number

  // Calculate pagination values
  const totalRows = Veiwdata.filter(row => row.some(cell => cell)).length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Filter and paginate the data
  const filteredData = Veiwdata
    .map((row) => {
      const filteredRow = row.slice();
      if (
        filteredRow.length >= 2 &&
        !filteredRow[filteredRow.length - 1] &&
        !filteredRow[filteredRow.length - 2]
      ) {
        filteredRow.splice(-2, 2);
      }
      return filteredRow;
    })
    .filter((row) => row.some((cell) => cell))
    .slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="card file-Width">
        <div className="d-flex pt-4 scroll-content">
          <span className="ms-4" style={{ whiteSpace: "nowrap" }}>
            File Name :
          </span>
          <div className="mb-0 ps-2 p-0 m-0 pb-2 w-100">
            <label className="fw-bold">{Filename}</label>
          </div>
        </div>

        <div className="mb-0 col-xl-12 ps-4">
          <div className="table-container">
            <table className="data-table">
              <tbody>
                {filteredData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`data-row ${rowIndex === 0 ? "bg-lighttest" : ""}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="data-cell">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        
      </div>
      <div className="d-flex justify-content-between  p-4 ps-3 pb-1 pt-2 align-items-start" style={{backgroundColor:"#FFFFFF"}}>
          <div className="footer-text mt-3">
            Showing {Math.min(startIndex + 1, totalRows)}-{Math.min(endIndex, totalRows)} of {totalRows}
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
    </>
  );
};

export default Originalfile;