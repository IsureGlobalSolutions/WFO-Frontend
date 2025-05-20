import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEditEstimationFte , GetAllEstimationsCustomizedFileByFTEId} from '../../../../redux/features/auth/authSlice';
import { saveAs } from 'file-saver'; // For saving files
import * as XLSX from 'xlsx';
import { toast } from 'react-toastify';

const Custommizedfiledata = ({ Veiwdata, Filename , fileData , setCustomizefile , fteid , selectedCategory}) => {
  const dispatch = useDispatch();
  const [filenameCounter, setFilenameCounter] = useState(1);
  const [data, setData] = useState(Veiwdata); // State to hold table data
  console.log("🚀 ~ Custommizedfiledata ~ Veiwdata:", Veiwdata)
  const [invalidRows, setInvalidRows] = useState(new Set());
  const [indexes, setIndexes] = useState([]);
  const [percentageIndex, setPercentageIndex] = useState(null);
  const [customizeddata, setcustomizeddata] = useState({
    FileType: "C",
    FTE: fileData.FTE,
    id: 1,
    OrganizationFteId: fileData.OrganizationFteId,
    OrganizationId: fileData.OrganizationId,
    DepartmentId: fileData.DepartmentId,
    DepartmentFteId: fileData.DepartmentFteId ,
    UploadedFile: null,
    SubdepartmentId: fileData.SubdepartmentId,
    SubdepartmentFteId: fileData.SubdepartmentFteId,
    ProjectId: fileData.ProjectId,
    ProjectFteId: fileData.ProjectFteId ,
    TeamId: fileData.TeamId,
    TeamFteId: fileData.TeamFteId,
    JobTitleId:  fileData.JobTitleId,
    JobTitleFteId: fileData.JobTitleFteId,
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // You can adjust this number

  useEffect(() => {
    setData(Veiwdata); 
  }, [Veiwdata]);
    console.log("🚀 ~ useEffect ~ setData:", setData)

  useEffect(() => {
    calculateSum();
  }, [data]);

  // Pagination calculations
  const totalRows = data.length - 1; // Subtract 1 for header row
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  
  // Get current rows to display (skip header row in pagination)
  const currentRows = data.slice(0, 1).concat(data.slice(1).slice(startIndex, endIndex));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleInputChange = (e, rowIndex, cellIndex) => {
    const value = parseFloat(e.target.value) || 0;
    if (value < 0) {
      return;
    }
    const newData = [...data];
    newData[rowIndex][cellIndex] = value;
    setData(newData);
  };

  const validateNumericInput = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value < 0) {
      e.target.value = "";
    }
  };

  const calculateSum = () => {
    let newIndexes = [];
    let percentageIdx = 0;
    let activityFrequencyMonthlyIndex = 0;
    let unitTimeMinutesPerActionIndex = 0;
    let monthlyMinutesIndex = 0;
    let annualMinutesIndex = 0;
    let annualHoursIndex = 0;

    const invalidRowsSet = new Set();

    data.forEach((row, rowIndex) => {
      if (rowIndex === 0) {
        newIndexes = [];
        row.forEach((headerText, index) => {
          if (headerText.includes('JD |')) {
            newIndexes.push(index);
          }

          if (headerText.trim().toUpperCase() === 'PERCENTAGE') {
            percentageIdx = index;
          }

          if (headerText.trim().toUpperCase() === 'ACTIVITY FREQUENCY (MONTHLY)') {
            activityFrequencyMonthlyIndex = index;
          }

          if (headerText.trim().toUpperCase() === 'UNIT TIME (MINUTES) PER ACTION') {
            unitTimeMinutesPerActionIndex = index;
          }

          if (headerText.trim().toUpperCase() === 'MONTHLY MINUTES') {
            monthlyMinutesIndex = index;
          }

          if (headerText.trim().toUpperCase() === 'ANNUAL MINUTES') {
            annualMinutesIndex = index;
          }

          if (headerText.trim().toUpperCase() === 'ANNUAL HOURS') {
            annualHoursIndex = index;
          }
        });
        setIndexes(newIndexes);
        setPercentageIndex(percentageIdx);
      } else {
        let rowSum = 0;

        newIndexes.forEach((index) => {
          const cellValue = parseFloat(row[index]) || 0;
          rowSum += cellValue;
        });

        const activityFrequencyMonthly = parseFloat(row[activityFrequencyMonthlyIndex]) || 0;
        const unitTimeMinutesPerAction = parseFloat(row[unitTimeMinutesPerActionIndex]) || 0;

        const monthlyMinutes = activityFrequencyMonthly * unitTimeMinutesPerAction;
        const annualMinutes = monthlyMinutes * 12;
        const annualHours = annualMinutes / 60;

        row[monthlyMinutesIndex] = monthlyMinutes.toFixed(0);
        row[annualMinutesIndex] = annualMinutes.toFixed(0);
        row[annualHoursIndex] = annualHours.toFixed(0);

        row[percentageIdx] = rowSum.toFixed(0);

        if (rowSum !== 100) {
          invalidRowsSet.add(rowIndex);
        } else {
          invalidRowsSet.delete(rowIndex);
        }
      }
    });

    setInvalidRows(invalidRowsSet);
  };

  const addRow = () => {
    const initialData = Array(data[0].length).fill(''); // Create an array of empty strings

    const newData = [...data, initialData];
    setData(newData);
  };

  const saveToApi = () => {
    const uniqueFilename = `${filenameCounter} ${Filename} `;
      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const file = new File([blob], uniqueFilename, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        console.log(file , "feilename");
      setcustomizeddata((prevState) => ({
        ...prevState,
        UploadedFile: file,
      }));
        const formData = new FormData();
      formData.append("UploadedFile", file);
      formData.append("FTE", customizeddata.FTE);
      formData.append("FileType", customizeddata.FileType);
      formData.append("DepartmentFteId", customizeddata.DepartmentFteId || 0);
      formData.append("DepartmentId", customizeddata.DepartmentId || 0);
      formData.append("OrganizationId", customizeddata.OrganizationId || 0);
      formData.append("OrganizationFteId", customizeddata.OrganizationFteId || 0);
      formData.append("SubdepartmentId", customizeddata.SubdepartmentId || 0);
      formData.append("SubdepartmentFteId", customizeddata.SubdepartmentFteId || 0);
      formData.append("ProjectId", customizeddata.ProjectId || 0);
      formData.append("ProjectFteId", customizeddata.ProjectFteId || 0);
      formData.append("TeamId", customizeddata.TeamId || 0);
      formData.append("TeamFteId", customizeddata.TeamFteId || 0);
      formData.append("JobTitleId", customizeddata.JobTitleId || 0);
      formData.append("JobTitleFteId", customizeddata.JobTitleFteId || 0);
     const response =   dispatch(addEditEstimationFte(formData))
   .then((response) => {
    console.log(response , "responsedata");
        if (response.payload.isSuccess) {
          setFilenameCounter((prevCounter) => prevCounter + 1);
          var C = "C";
      const response = dispatch(
        GetAllEstimationsCustomizedFileByFTEId({ selectedCategory, fteid  , C })
      ).then((response) => {
        setCustomizefile(response.payload);
      });
        } 
  
      }).catch((error) => {
        toast.error('Failed to save data.');
      });
    };
    

  return (
    <>
     <div className='d-flex justify-content-between w-100' style={{
      backgroundColor:"#FFFFFF", borderRadius:"10px"
     }}> 
          <div className="d-flex pt-2">
            <span className="ms-4 d-flex justify-content-center mt-2 ">
              File Name :
            </span>
            <div className="card-header mb-0 ps-4 mt-2 pt-0 pb-2 ">
              <label className="col-md-12 fw-bold">
                {Filename}
              </label>
              <a
                href="#"
                className="card-fullscreen"
                data-bs-toggle="tooltip"
                title="Card Full-Screen"
              >
                <i className="icon-size-fullscreen" />
              </a>
            </div>
          </div>
          <div className="col-md-8 d-flex alignt-items-center mt-2">
            <button
              onClick={saveToApi}
              type="button"
              className="save-button"
            >
              Save
            </button>
            <div className="d-flex ms-3 ">
              <h5>Note: </h5>
              <p
                style={{
                  color: 'black',
                  fontSize: 'larger',
                  marginLeft: '10px',
                }}
              >
                Input fields are editable
              </p>
            </div>
          </div>
        </div>
    <div className="card file-Width">
      
      <div className="">
       
        <div className="card-header mb-0 col-xl-12">
          <div className="table-container">
            <table id="tblCustom">
              <tbody>
                {currentRows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`data-row ${rowIndex === 0 ? 'bg-lighttest' : ''}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`data-cell ${
                          cellIndex < 5 ? 'blue-background' : ''
                        } ${
                          invalidRows.has(rowIndex) &&
                          (indexes.includes(cellIndex) ||
                            cellIndex === percentageIndex)
                            ? 'red-background'
                            : ''
                        }`}
                      >
                        {rowIndex===0 || !indexes.includes(cellIndex) ? (
                          cell
                        ) : (
                          <input
                            type="text"
                            value={cell}
                            className="editable-input"
                            onChange={(e) => handleInputChange(e, rowIndex, cellIndex)}
                            onBlur={validateNumericInput}
                          />
                        )}
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
    
    </div>
  {totalRows > rowsPerPage && (
    <div className="d-flex justify-content-between p-4 ps-3 pb-1 pt-2 align-items-start" style={{backgroundColor:"#FFFFFF"}}>
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
  )}
    </>
    
  );
};

export default Custommizedfiledata;