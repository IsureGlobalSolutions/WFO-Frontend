import React, { useState, useRef } from "react";
import "./fte.css";
import { useDispatch } from "react-redux";
import { addEditFte, getFteData } from "../../redux/features/auth/authSlice";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { RiQuestionMark } from "react-icons/ri";
import { FaPlus, FaTrash } from "react-icons/fa";
import dayjs from "dayjs";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";

function FTE({ onBack, setActive }) {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    fte: {
      id: 0,
      workingHours: "",
      breakHours: "",
      workingDays: "",
      totalAwayDays: "",
      FTEName: "",
      gazettedHolidays: "",
      annualLeaves: "",
      sickLeaves: "",
      casualLeaves: "",
      breakCustomFields: [],
      leavesCustomFields: [],
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [selectedRegion, setSelectedRegion] = useState("South Asia");
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [selectedTime, setSelectedTime] = useState(null);

  const [showBreakInputs, setShowBreakInputs] = useState(false);
  const [showAwayInputs, setShowAwayInputs] = useState(false);
  const breakFieldRef = useRef(null);
  const awayFieldRef = useRef(null);
    const breakTimeRef = useRef(null); // New ref for break time input
    const [isSubmitting, setIsSubmitting] = useState(false);

  // Add this ref
  const awayDaysValueRef = useRef(null);
  const regionToCountriesMap = {
    "South Asia": ["Pakistan"],
    East: ["SaudiArabia", "UAE"],
    South: ["Canada", "USA"],
  };

  const countriesForSelectedRegion = regionToCountriesMap[selectedRegion] || [];

  const handleRegionChange = (event) => {
    const newRegion = event.target.value;
    setSelectedRegion(newRegion);
    const countries = regionToCountriesMap[newRegion] || [];
    setSelectedCountry(countries.length > 0 ? countries[0] : "");
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      fte: {
        ...formValues.fte,
        [name]: value,
      },
    });
  };

  const addBreakField = () => {
    if (!showBreakInputs) {
      setShowBreakInputs(true);
      return;
    }

    const fieldName = breakFieldRef.current?.value.trim();
    const fieldTime = breakTimeRef.current?.value.trim(); // Get value from input instead of TimePicker

    if (fieldName && fieldTime) {
      // Validate time format (HH:mm)
      if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(fieldTime)) {
        toast.error("Please enter time in HH:mm format");
        return;
      }

      const newField = {
        fieldName,
        fieldValue: fieldTime.replace(":", "."), // Convert to HH.mm format
      };

      setFormValues((prev) => ({
        ...prev,
        fte: {
          ...prev.fte,
          breakCustomFields: [...prev.fte.breakCustomFields, newField],
        },
      }));

      breakFieldRef.current.value = "";
      if (breakTimeRef.current) breakTimeRef.current.value = "";
      setShowBreakInputs(false);
    }
  };
  const removeBreakField = (index) => {
    setFormValues((prev) => ({
      ...prev,
      fte: {
        ...prev.fte,
        breakCustomFields: prev.fte.breakCustomFields.filter(
          (_, i) => i !== index
        ),
      },
    }));
  };

  // Updated Away Days Functions
  const addAwayField = () => {
    if (!showAwayInputs) {
      setShowAwayInputs(true);
      return;
    }

    const fieldName = awayFieldRef.current?.value.trim();
    const fieldDays = awayDaysValueRef.current?.value.trim() || "1";

    if (fieldName) {
      const newField = {
        fieldName,
        fieldValue: fieldDays,
      };

      setFormValues((prev) => ({
        ...prev,
        fte: {
          ...prev.fte,
          leavesCustomFields: [...prev.fte.leavesCustomFields, newField],
        },
      }));

      awayFieldRef.current.value = "";
      if (awayDaysValueRef.current) awayDaysValueRef.current.value = "";
      setShowAwayInputs(false);
    }
  };

  const removeAwayField = (index) => {
    setFormValues((prev) => ({
      ...prev,
      fte: {
        ...prev.fte,
        leavesCustomFields: prev.fte.leavesCustomFields.filter(
          (_, i) => i !== index
        ),
      },
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const isValid = validateForm();

    if (!isValid) {
      // If invalid, show errors but keep loading state briefly
      setTimeout(() => setIsSubmitting(false), 500);
      return;
    }

    try {
      const transformedData = transformFormData(formValues);
      const result = await dispatch(addEditFte(transformedData.fte));


      if (result?.payload?.isSuccess) {
        await dispatch(getFteData());

        toast.success(result?.payload.alertMessage);  
        onBack();
        setActive(false); 
      } else {
        toast.error(result?.payload.alertMessage);  

      }
    } catch (error) {
      // toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const transformFormData = (formData) => {
    return {
      fte: {
        ...formData.fte,
        Country: selectedCountry,
        breakCustomFields: formData.fte.breakCustomFields.map((field) => ({
          ...field,
          fieldValue: field.fieldValue.replace(".", ":"),
        })),
        leavesCustomFields: formData.fte.leavesCustomFields.map((field) => ({
          ...field,
          fieldValue: Number(field.fieldValue),
        })),
      },
    };
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = [
      "FTEName",
      "workingHours",
      "breakHours",
      "workingDays",
      "totalAwayDays",
      "gazettedHolidays",
      "annualLeaves",
      "sickLeaves",
      "casualLeaves",
    ];

    requiredFields.forEach((field) => {
      if (!formValues.fte[field]?.trim?.()) {
        errors[field] = `${field} is Required`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleReset = () => {
    setFormValues({
      fte: {
        id: 0,
        workingHours: "",
        breakHours: "",
        workingDays: "",
        totalAwayDays: "",
        FTEName: "",
        gazettedHolidays: "",
        annualLeaves: "",
        sickLeaves: "",
        casualLeaves: "",
        breakCustomFields: [],
        leavesCustomFields: [],
      },
    });
    setFormErrors({});
  };

  return (
    // <Modal show={active} onHide={() => setActive(false)} centered size="lg">
    //   <Modal.Body
    //     className="p-4"
    //     style={{ maxHeight: "90vh", overflowY: "auto" }}
    //   >
    <>
    <div className="   p-4" 
    style={{
      backgroundColor: "#FFFFFF",
      marginTop:"2px"
    }} >

        <div className="d-flex gap-2 align-items-center mb-4">
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{ cursor: 'pointer' }}
                    onClick={onBack}
                  >
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H3.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708.708L3.707 7.5H14.5a.5.5 0 0 1 .5.5z"/>
                  </svg>
          <h4 className="m-0 Top-heading-tag">Add FTE</h4>
        </div>

        {/* FTE Name */}
        <div className="mb-4">
          <label className="label-tag pb-1">FTE Name</label>
          <input
            type="text"
            className={`form-control ${formErrors.FTEName ? "is-invalid" : ""}`}
            placeholder="Enter FTE name"
            name="FTEName"
            value={formValues.fte.FTEName}
            onChange={handleInputChange}
            style={{ maxWidth: "300px" }}
          />
          {formErrors.FTEName && (
            <div className="invalid-feedback">{formErrors.FTEName}</div>
          )}
        </div>

        <div className="   mb-4">
          <h5 className=" mb-3 Top-heading-tag">Calculate FTE</h5>

          {/* Working Hours and Days */}
          <div className="row mb-3 gap-2">
            <div className="col-md-4">
              <label className="label-tag pb-1">
                Daily Working Hours
              </label>
              <input
                className={`form-control ${
                  formErrors.workingHours ? "is-invalid" : ""
                }`}
                type="number"
                placeholder="Enter hours"
                name="workingHours"
                value={formValues.fte.workingHours}
                onChange={handleInputChange}
                // style={{ maxWidth: "300px" }}
              />
              {formErrors.workingHours && (
                <div className="invalid-feedback">
                  {formErrors.workingHours}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <label className="label-tag pb-1">
                Weekly Working Days
              </label>
              <input
                className={`form-control ${
                  formErrors.workingDays ? "is-invalid" : ""
                }`}
                type="number"
                placeholder="Enter days"
                name="workingDays"
                value={formValues.fte.workingDays}
                onChange={handleInputChange}
                // style={{ maxWidth: "300px" }}
              />
              {formErrors.workingDays && (
                <div className="invalid-feedback">{formErrors.workingDays}</div>
              )}
            </div>
          </div>
          {/* Break Hours */}
          <div className="mb-3">
            <label className="label-tag pb-1">Daily Break Hours</label>
            <div className="d-flex align-items-center mb-2">
            <div className="d-flex align-items-center rounded-3 border-1 border" style={{ width: "300px" }} >
               <input
                type="number"
                className={` form-control border-0 ${
                  formErrors.breakHours ? "is-invalid" : ""
                }`}
                name="breakHours"
                value={formValues.fte.breakHours}
                onChange={handleInputChange}
                placeholder="Enter break hours"
                style={{ width: "260px" }}
              />
              <button
                className="border-0"
                onClick={addBreakField}
              >
                <FaPlus className="me-1" /> 
              </button>
            </div>


             
            </div>
            {formErrors.breakHours && (
              <div className="invalid-feedback d-block">
                {formErrors.breakHours}
              </div>
            )}

            {/* Break Hours Input Fields - Only shown when showBreakInputs is true */}
            {showBreakInputs && (
              <div className="d-flex align-items-center mb-3">
                <input
                  type="text"
                  ref={breakFieldRef}
                  className="form-control me-2"
                  placeholder="Field name"
                  style={{ maxWidth: "120px" }}
                />
                 <input
              type="text"
              ref={breakTimeRef}
              className="form-control me-2"
              placeholder="HH:mm"
              style={{ maxWidth: "120px" }}
            />
                <button
                  className="btn btn-primary me-2"
                  onClick={addBreakField}
                >
                  Save
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setShowBreakInputs(false)}
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Display Added Break Fields */}
            {formValues.fte.breakCustomFields.map((field, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <input
                  type="text"
                  className="form-control me-2 bg-light"
                  value={field.fieldName}
                  readOnly
                  style={{ maxWidth: "120px" }}
                />
                <input
                  type="text"
                  className="form-control me-2 bg-light"
                  value={field.fieldValue}
                  readOnly
                  style={{ maxWidth: "120px" }}
                />
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeBreakField(index)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
       <hr className="m-0 mb-2 pt-2 " />
          {/* Gazetted Holidays */}
          <div className="mb-3 ">
            <div className="d-flex align-items-center mb-2">
              <h5 className=" Top-heading-tag me-2 mt-2">Gazetted Holidays</h5>
              {/* <RiQuestionMark className="text-muted" /> */}
            </div>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="label-tag pb-1">Select Region</label>
                <select
                  className="form-select"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                >
                  <option value="South Asia">South Asia</option>
                  <option value="East">Middle East</option>
                  <option value="South">North America</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="label-tag pb-1">Select Country</label>
                <select
                  className="form-select"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {countriesForSelectedRegion.map((country) => (
                    <option key={country} value={country}>
                      {country.replace(/([A-Z])/, " $1").trim()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="label-tag pb-1">Days</label>
                <input
                  className={`form-control ${
                    formErrors.gazettedHolidays ? "is-invalid" : ""
                  }`}
                  type="number"
                  placeholder="Days"
                  name="gazettedHolidays"
                  value={formValues.fte.gazettedHolidays}
                  onChange={handleInputChange}
                />
                {formErrors.gazettedHolidays && (
                  <div className="invalid-feedback">
                    {formErrors.gazettedHolidays}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Leaves */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="label-tag pb-1">Annual Leaves</label>
              <input
                className={`form-control ${
                  formErrors.annualLeaves ? "is-invalid" : ""
                }`}
                type="number"
                placeholder="Enter days"
                name="annualLeaves"
                value={formValues.fte.annualLeaves}
                onChange={handleInputChange}
              />
              {formErrors.annualLeaves && (
                <div className="invalid-feedback">
                  {formErrors.annualLeaves}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <label className="label-tag pb-1">Sick Leaves</label>
              <input
                className={`form-control ${
                  formErrors.sickLeaves ? "is-invalid" : ""
                }`}
                type="number"
                placeholder="Enter days"
                name="sickLeaves"
                value={formValues.fte.sickLeaves}
                onChange={handleInputChange}
              />
              {formErrors.sickLeaves && (
                <div className="invalid-feedback">{formErrors.sickLeaves}</div>
              )}
            </div>
            <div className="col-md-4">
              <label className="label-tag pb-1">Casual Leaves</label>
              <input
                className={`form-control ${
                  formErrors.casualLeaves ? "is-invalid" : ""
                }`}
                type="number"
                placeholder="Enter days"
                name="casualLeaves"
                value={formValues.fte.casualLeaves}
                onChange={handleInputChange}
              />
              {formErrors.casualLeaves && (
                <div className="invalid-feedback">
                  {formErrors.casualLeaves}
                </div>
              )}
            </div>
          </div>
         <hr className="m-0 mb-2" />
           {/* Other Away Days */}
      <div className="mb-4">
        <label className="label-tag pb-1">Other Away Days</label>
        <div className="d-flex align-items-center mb-2">
        <div className="d-flex align-items-center border rounded-3 border-1"
         style={{ width: "300px" }}
        >
            <input
            type="number"
            className={` form-control border-0 ${formErrors.totalAwayDays ? 'is-invalid' : ''}`}
            name="totalAwayDays"
            value={formValues.fte.totalAwayDays}
            onChange={handleInputChange}
            placeholder="Enter days"
            style={{ width: '260px' }}
          />
          <button
            className="btn border-0"
            onClick={addAwayField}
          >
            <FaPlus className="me-1" /> 
          </button>
        </div>
        
        </div>
        {formErrors.totalAwayDays && (
          <div className="invalid-feedback d-block">{formErrors.totalAwayDays}</div>
        )}

        {/* Away Days Input Fields - Only shown when showAwayInputs is true */}
        {showAwayInputs && (
          <div className="d-flex align-items-center mb-3">
            <input
              type="text"
              ref={awayFieldRef}
              className="form-control me-2"
              placeholder="Day Name"
              style={{ maxWidth: '100px' }}
            />
            <input
              type="number"
              ref={awayDaysValueRef}
              className="form-control me-2"
              placeholder="Value"
              style={{ maxWidth: '100px' }}
              defaultValue="1"
            />
            <button
              className="btn btn-primary me-2"
              onClick={addAwayField}
            >
              Save
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setShowAwayInputs(false)}
            >
              Cancel
            </button>
          </div>
        )}

        {/* Display Added Away Fields */}
        {formValues.fte.leavesCustomFields.map((field, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
   
            <input
              type="text"
              className="form-control me-2 bg-light"
              value={field.fieldName}
              readOnly
              style={{ maxWidth: '100px' }}
            />
            <input
              type="text"
              className="form-control me-2 bg-light"
              value={field.fieldValue}
              readOnly
              style={{ maxWidth: '100px' }}
            />
            <button
              className="btn btn-outline-danger"
              onClick={() => removeAwayField(index)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center align-items-center gap-3  ">
   
          <div className=" gap-2  d-flex  p-0">
          <button
            type="button"
            className="cancel-button px-4 w-75"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="button"
            className="save-button px-4 w-100 p-0 "
            style={{  whiteSpace:"nowrap"}}
            onClick={handleSubmit}
          >
        {isSubmitting ? (<div>

          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
Loading..
        </div>) : (<div>Add Now</div>)}
        </button>
        </div>
          </div>
        
        </div>

        </>

    //   </Modal.Body>
    // </Modal>
  );
}

export default FTE;
