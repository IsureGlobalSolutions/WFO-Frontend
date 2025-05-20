import React, { useState, useRef, useEffect } from "react";
import "../fte/fte.css";
import { useDispatch, useSelector } from "react-redux";
import { addEditDeparmentFTE, addEditFte, getDepartmentData, getDepartmentFteById, getDepFteData, getFteData, OrganizationFteById } from "../../redux/features/auth/authSlice";

import { FaPlus, FaTrash } from "react-icons/fa";
import dayjs from "dayjs";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import DepartmentApi from "../adminside/department/DepartmentApi";

function Depfte({onBack , setActive,  }) {
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
  const [selectedRegion, setSelectedRegion] = useState();
  const Departmentname = useSelector((state) => state.auth.Departmentname);
  const [selectedCountry, setSelectedCountry] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showBreakInputs, setShowBreakInputs] = useState(false);
  const [showAwayInputs, setShowAwayInputs] = useState(false);
  const breakFieldRef = useRef(null);
  const awayFieldRef = useRef(null);
  const awayDaysValueRef = useRef(null);
  const breakTimeRef = useRef(null);
  
  // Updated region-country mapping
  const regionToCountriesMap = {
    "South Asia": ["Pakistan"],
    "East": ["SaudiArabia", "UAE"],
    "South": ["Canada", "USA"],
  };

  // Create country-to-region mapping
  const countryToRegionMap = {};
  Object.entries(regionToCountriesMap).forEach(([region, countries]) => {
    countries.forEach(country => {
      countryToRegionMap[country] = region;
    });
  });



  const handleRegionChange = (event) => {
    const newRegion = event.target.value;
    setSelectedRegion(newRegion);
    setSelectedCountry("");
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    const departmentId = event.target.value;
    const department = Departmentname.find(dep => dep.id === Number(departmentId));
    setSelectedDepartment(department);
    
    setFormValues(prev => ({
      ...prev,
      fte: {
        ...prev.fte,
        departmentId: departmentId ? Number(departmentId) : null,
      },
    }));
    
    setFormErrors(prev => ({
      ...prev,
      departmentId: null,
    }));
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
    const fieldTime = breakTimeRef.current?.value.trim();

    if (fieldName && fieldTime) {
      if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(fieldTime)) {
        toast.error("Please enter time in HH:mm format");
        return;
      }

      const newField = {
        fieldName,
        fieldValue: fieldTime.replace(":", "."),
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
      const result =   await dispatch(addEditDeparmentFTE(transformedData.fte))
      if (result?.payload?.isSuccess) {
        await dispatch(getDepFteData());
        toast.success(result?.payload.alertMessage);
        onBack();
        setActive(false); // Assuming this closes the form
      } else {
        toast.error(result?.payload?.alertMessage );
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
 <>
 <div className="p-3 ps-4" style={{marginTop:"2px" , backgroundColor:"#FFFFFF"}}>
 <DepartmentApi/>

 </div>
 <div className="p-3 ps-4" style={{backgroundColor:"#FFFFFF" ,  marginTop:"2px"}}>



        <div className="d-flex gap-2 align-items-center mt-1 mb-3">
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
          <h4 className="m-0 Top-heading-tag">Add Department FTE</h4>
        
        </div>

        <div className="row">
          <div className="mb-4 col-md-4">
            <label className="label-tag">FTE Name</label>
            <input
              type="text"
              className={`form-control ${formErrors.FTEName ? "is-invalid" : ""}`}
              placeholder="Enter FTE name"
              name="FTEName"
              value={formValues.fte.FTEName}
              onChange={handleInputChange}
            />
            {formErrors.FTEName && (
              <div className="invalid-feedback">{formErrors.FTEName}</div>
            )}
          </div>

          <div className="col-md-4">
            <label className="label-tag" htmlFor="departmentSelect">
              Department
            </label>
            <select
              id="departmentSelect"
              className={`form-select ${formErrors.departmentId ? "is-invalid" : ""}`}
              value={selectedDepartment?.id || ""}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Department</option>
              {Departmentname?.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
            {formErrors.departmentId && (
              <div className="invalid-feedback">{formErrors.departmentId}</div>
            )}
          </div>
        </div>

        <div className=" mb-4">
          <h5 className="mb-3 Top-heading-tag">Calculate FTE</h5>

          {/* Working Hours and Days */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="label-tag">Daily Working Hours</label>
              <input
                className={`form-control ${
                  formErrors.workingHours ? "is-invalid" : ""
                }`}
                type="number"
                placeholder="Enter hours"
                name="workingHours"
                value={formValues.fte.workingHours}
                onChange={handleInputChange}
              />
              {formErrors.workingHours && (
                <div className="invalid-feedback">
                  {formErrors.workingHours}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <label className="label-tag">Weekly Working Days</label>
              <input
                className={`form-control ${
                  formErrors.workingDays ? "is-invalid" : ""
                }`}
                type="number"
                placeholder="Enter days"
                name="workingDays"
                value={formValues.fte.workingDays}
                onChange={handleInputChange}
              />
              {formErrors.workingDays && (
                <div className="invalid-feedback">{formErrors.workingDays}</div>
              )}
            </div>
          </div>

          {/* Break Hours */}
          <div className="mb-3">
            <label className="label-tag">Daily Break Hours</label>
            <div className="d-flex align-items-center mb-2">
              <div className="d-flex align-items-center rounded-3 border"
                style={{ width: "300px" }}
              >
                <input
                  type="number"
                  className={` p-2 form-control border-0 ${
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
                  className="save-button  p-2 me-2"
                  onClick={addBreakField}
                  style={{
                    borderRadius: '10px',
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    width:'100px'
                  }}
                >
                  Save
                </button>
                <button
                  className="cancel-button p-2"
                  style={{
                    borderRadius: '10px',
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    width:'100px'
                  }}
                  onClick={() => setShowBreakInputs(false)}
                >
                  Cancel
                </button>
              </div>
            )}

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
                  value={field.fieldValue.replace(".", ":")}
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
          <hr className="m-0 mb-2" />

          {/* Gazetted Holidays */}
          <div className="mb-3 ">
            <div className="d-flex align-items-center mb-2 pt-2">
              <h5 className="Top-heading-tag me-2">Gazetted Holidays</h5>
            </div>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="label-tag">Select Region</label>
                <select
                  className="form-select"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                >
                  <option value="">Select Region</option>
                  {Object.keys(regionToCountriesMap).map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="label-tag">Select Country</label>
                <select
                  className="form-select"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  disabled={!selectedRegion}
                >
                  <option value="">Select Country</option>
                  {selectedRegion && regionToCountriesMap[selectedRegion]?.map((country) => (
                    <option key={country} value={country}>
                      {country.replace(/([A-Z])/, " $1").trim()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="label-tag">Days</label>
                <input
                  className={`form-control ${formErrors.gazettedHolidays ? "is-invalid" : ""}`}
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
              <label className="label-tag">Annual Leaves</label>
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
              <label className="label-tag">Sick Leaves</label>
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
              <label className="label-tag">Casual Leaves</label>
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
            <label className="label-tag">Other Away Days</label>
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
                  className="save-button  p-2 me-2"
                  onClick={addAwayField}
                  style={{
                    borderRadius: '10px',
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    width:'100px'
                  }}
                >
                  Save
                </button>
                <button
                  className="cancel-button p-2"
                  style={{
                    borderRadius: '10px',
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    width:'100px'
                  }}
                  onClick={() => setShowAwayInputs(false)}
                >
                  Cancel
                </button>
              </div>
            )}

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

        <div className="d-flex justify-content-center align-items-center gap-3 ">
     <div className="pt-3">
     

     </div>
        <div className="d-flex justify-content-end gap-3 ">
        <button
            type="button"
            className="cancel-button px-4 w-75  m-0"
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
  );
}

export default Depfte;