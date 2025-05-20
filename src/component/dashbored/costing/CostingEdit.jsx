import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addEditCosting, GetAllCostingByFile, GetCostingById, getdesignationdata } from "../../../redux/features/auth/authSlice";
import { Modal } from "react-bootstrap";

const CostingEdit = ({ active, setActive, EditId }) => {
  const dispatch = useDispatch();
  const filenames = useSelector((state) => state.auth.filenames);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [costData, setCostData] = useState(null);
  const [filedata, setfiledata] = useState([]);
  const [designationname, setdesignationname] = useState("");
  const [costname, setcostname] = useState();
  const [selectdesignation, setselectdesignation] = useState("");
  const [Currency, setCurrancy] = useState("");
const [designationId, setdesignationId] = useState()
  const loading = useSelector((state) => state.auth.loading);

  const [touchedFields, setTouchedFields] = useState({
    designation: false,
    cost: false
  });

  // Get designation columns from filedata
  const jdColumns = filedata.filter((col) => col.startsWith("JD |"));

  useEffect(() => {
    if (EditId) {
      dispatch(GetCostingById(EditId)).then((response) => {
        console.log("🚀 ~ dispatch ~ response:", response)
        if (response.payload) {
          setCostData(response.payload);
          setcostname(response.payload.cost);
          setdesignationname(response.payload.designationName);
          setdesignationId(response.payload.designationID);
          
          // Set the full JD | designation format for the dropdown
          const fullDesignation = `JD | ${response.payload.designationName}`;
          setselectdesignation(fullDesignation);
          
          // Get file data for the designation dropdown
          dispatch(getdesignationdata(response.payload.fileName)).then((res) => {
            if (res.payload && res.payload.length > 0) {
              setfiledata(res.payload[0]);
            }
          });
          
          // Set currency based on filename
          const file = filenames.find(f => f.name === response.payload.fileName);
          if (file) {
            let currency = "";
            if (file.country === "Pakistan") {
              currency = "PKR";
            } else if (file.country === "UAE") {
              currency = "AED";
            } else if (file.country === "Saudi Arabia") {
              currency = "SAR";
            } else if (file.country === "Canada") {
              currency = "CA$";
            } else if (file.country === "USA") {
              currency = "$";
            }
            setCurrancy(currency);
          }
        }
      });
    }
  }, [EditId, dispatch, filenames]);

  const getdesignationname = (e) => {
    const name = e.target.value;
    const value = name.split("JD |")[1].trim();
    setdesignationname(value);
    setselectdesignation(name);
  };

  const handlename = (e) => {
    const name = parseFloat(e.target.value);
    setcostname(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTouchedFields({
      designation: true,
      cost: true
    });

    if (!costname || !selectdesignation) {
      setIsSubmitting(false);
      return;
    }

    const updatedData = {
      id: EditId,
      cost: parseInt(costname),
      designationName: designationname,
      fileName:costData.fileName ,
      designationID:designationId,
    };

    dispatch(addEditCosting(updatedData)).then((response) => {
      if (response.payload?.isSuccess) {
        dispatch(GetAllCostingByFile(costData.fileName))
        toast.success("Cost updated successfully!");
        setActive(false);
      } else {
        toast.error(response.payload?.alertMessage || "Failed to update cost");
      }
    }).catch((error) => {
      toast.error("An error occurred while updating cost");
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  if (!active) return null;

  return (


    <Modal show={active} onHide={() => setActive(false)} centered size="lg">
       <Modal.Body className="pt-3 ">
       <div className="d-flex justify-content-between align-items-center mb-4 m-3">
           <h4 className="m-0 fw-bolder">Edit Costing</h4>
           <button
             className="btn-close"
             onClick={() => setActive(false)}
             aria-label="Close"
           />
         </div>
    
        <div >
          {loading && !costData ? (
            <div>Loading...</div>
          ) : (
<div className="d-flex flex-column p-4 justify-content-center">
  <div className="row g-4 align-items-center">
    {/* File Name (readonly) - First Column */}
    <div className="col-md-6">
      <label className="div-label pb-3" style={{ 
        fontWeight: 600, 
        fontSize: '15px', 
        lineHeight: '100%', 
        letterSpacing: '0px', 
        color: "#606060",
        fontFamily: "Poppins, sans-serif",
      }}>
        File Name
      </label>
      <input
        type="text"
        className="form-control"
        style={{ 
          height: "46px",
          border: '0.94px solid #D6D6D6',
          color: '#A3A3A3',
          borderRadius: '10px',
          padding: '10px 15px',
          fontFamily: "Poppins, sans-serif",
        }}
        value={costData?.fileName || ''}
        readOnly
        disabled
      />
    </div>

    {/* Designation Dropdown - Second Column */}
    <div className="col-md-6">
      <label className="form-label pb-2" style={{ 
        fontWeight: 600, 
        fontSize: '15px', 
        lineHeight: '100%', 
        letterSpacing: '0px', 
        color: "#606060",
        fontFamily: "Poppins, sans-serif",
      }}>
        Designation <span className="text-danger">*</span>
      </label>
      <select
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
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <option value="" style={{ color: '#A3A3A3' }}>Select Designation</option>
        {jdColumns?.map((col, index) => (
          <option key={index} value={col}>
            {col.split("JD |")[1].trim()}
          </option>
        ))}
      </select>
    </div>

    {/* Cost Input - Third Column */}
    <div className="col-md-6">
      <label className="form-label pb-2" style={{ 
        fontWeight: 600, 
        fontSize: '15px', 
        lineHeight: '100%', 
        letterSpacing: '0px', 
        color: "#606060",
        fontFamily: "Poppins, sans-serif",
      }}>
        Cost ({Currency}) <span className="text-danger">*</span>
      </label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Cost"
        style={{ 
          height: "46px",
          border: '0.94px solid #D6D6D6',
          color: '#A3A3A3',
          borderRadius: '10px',
          padding: '10px 15px',
          fontFamily: "Poppins, sans-serif",
        }}
        value={costname}
        onChange={(e) => setcostname(e.target.value)}
        min="0"
      />
    </div>
  </div>
</div>
          )}
        </div>

        <div className="d-flex justify-content-end pe-4  ">
              
<button
  onClick={handleSubmit}
  disabled={ !costname || !selectdesignation}
  className={`save-button w-25 d-flex justify-content-center align-items-center ${
( !costname || !selectdesignation) ? 'disabled-button' : ''
  }`}
  style={{
    height: '46px',
    borderRadius: '10px',
    fontWeight: 600,
    whiteSpace: "nowrap",
    opacity: ( !costname || !selectdesignation) ? 0.6 : 1, 
    cursor: ( !costname || !selectdesignation) ? 'not-allowed' : 'pointer'
  }}
>
{isSubmitting ? 'Updating...' : 'Update'}
</button>
          
        </div>
    
    </Modal.Body>
    </Modal>
  );
};

export default CostingEdit;