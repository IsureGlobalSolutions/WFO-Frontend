import React, { useState, useRef, useEffect } from "react";
import "../fte/fte.css";
import { useDispatch, useSelector } from "react-redux";
import {  addEditProjecttFTE, addEditSubDepartmentFTE,  getProjectFteById,  getProjectFteData,  getSubDepartmentFteById, getSubdepFteData, OrganizationFteById } from "../../redux/features/auth/authSlice";

import { FaPlus, FaTrash } from "react-icons/fa";

import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import LatestSekeltonLoader from "../SekeltonLoader/LatestSekeltonLoader";

function ProjectFTEModal({ onBack, setActive, selectedId }) {
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
  const Projectname = useSelector((state) => state.auth.GetProjectList);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showBreakInputs, setShowBreakInputs] = useState(false);
  const [showAwayInputs, setShowAwayInputs] = useState(false);
  const breakFieldRef = useRef(null);
  const awayFieldRef = useRef(null);
  const awayDaysValueRef = useRef(null);
  const breakTimeRef = useRef(null);
    const [IsLoader, setIsLoader] = useState(false)
    const [isSubmitting, setisSubmitting] = useState(false)

  
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

  useEffect(() => {
    setIsLoader(true);
    if (selectedId) {
      dispatch(getProjectFteById(selectedId)).then((res) => {
        if (res.payload) {
          console.log("FTE Data:", res.payload);
          
          setFormValues({
            fte: {
              ...res.payload,
              FTEName: res.payload.fteName || "",
              cancelled: false,
              id: selectedId,
              breakCustomFields: res.payload.breakCustomFields || [],
              leavesCustomFields: res.payload.leavesCustomFields || [],
            },
          });
          
          // Set department if found
          const project = Projectname.find((item) => item.id === res.payload.projectId);
          if (project) {
            setSelectedProject(project);
          }

          // Set country first, then derive region from it
          const country = res.payload.country;
          if (country) {
            setSelectedCountry(country);
            // Find region based on country
            const region = countryToRegionMap[country];
            if (region) {
              setSelectedRegion(region);
            }
          }
        }
        setIsLoader(false)
      });
    }
  }, [selectedId]);

  const handleRegionChange = (event) => {
    const newRegion = event.target.value;
    setSelectedRegion(newRegion);
    setSelectedCountry("");
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    const ProjectId = event.target.value;
    const department = Projectname.find(dep => dep.id === Number(ProjectId));
    setSelectedProject(department);
    
    setFormValues(prev => ({
      ...prev,
      fte: {
        ...prev.fte,
        projectId: ProjectId ? Number(ProjectId) : null,
      },
    }));
    
    setFormErrors(prev => ({
      ...prev,
      projectId: null,
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
    setisSubmitting(true);
    try {
      const transformedData = transformFormData(formValues);
      await dispatch(addEditProjecttFTE(transformedData.fte))
        .then((res) => {
          console.log("🚀 ~ .then ~ res:", res)
          if(res?.payload?.isSuccess){
            dispatch(getProjectFteData());
            toast.success(res?.payload.alertMessage)
            setisSubmitting(false);
            onBack();
            setActive(false);
          }
          else{
            toast.error(res?.payload?.alertMessage)
          }
        })
    } catch (error) {
      // alert(error.errorMessage);
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
        errors[field] = `Field is required`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

 

  return (
    <div
    className="p-4 mt-1"
    style={{   backgroundColor:"#FFFFFF"}}
  >
    <>
    {IsLoader ? ( 
      <div className=" w-100">
        
                  <LatestSekeltonLoader/>
      </div>
    ): (
      <div className="p-4" >
       <>
       <div className="d-flex justify-content-start gap-2 align-items-center mb-4">
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
          <h4 className="m-0 fw-bolder">Edit FTE</h4>
        
        </div>

        <div className="row">
          <div className="mb-4 col-md-4">
            <label className="fte-label">FTE Name</label>
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
            <label className="fte-label" htmlFor="departmentSelect">
             Project
            </label>
            <select
              id="departmentSelect"
              className={`form-select ${formErrors.subDepartmentId ? "is-invalid" : ""}`}
              value={selectedProject?.id || ""}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Project</option>
              {Projectname?.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
            {formErrors.subDepartmentId && (
              <div className="invalid-feedback">{formErrors.subDepartmentId}</div>
            )}
          </div>
        </div>

        <div className="pt-3 mb-4">
          <h5 className="mb-3 fw-bolder">Calculate FTE</h5>

          {/* Working Hours and Days */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="fte-label">Daily Working Hours</label>
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
              <label className="fte-label">Weekly Working Days</label>
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
          <hr className="m-0 mb-2" />

          {/* Break Hours */}
          <div className="mb-3">
            <label className="fte-label">Daily Break Hours</label>
            <div className="d-flex align-items-center mb-2">
              <div className="d-flex align-items-center rounded-3 border-1 border"
                style={{ width: "300px" }}
              >
                <input
                  type="number"
                  className={`p-2 border-0 ${
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
          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <h5 className="mt-4 fw-bolder me-2">Gazetted Holidays</h5>
            </div>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="fte-label">Select Region</label>
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
                <label className="fte-label">Select Country</label>
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
                <label className="fte-label">Days</label>
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
              <label className="fte-label">Annual Leaves</label>
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
              <label className="fte-label">Sick Leaves</label>
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
              <label className="fte-label">Casual Leaves</label>
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
            <label className="fte-label">Other Away Days</label>
            <div className="d-flex align-items-center mb-2">
              <div className="d-flex align-items-center border rounded-3 border-1"
                style={{ width: "300px" }}
              >
                <input
                  type="number"
                  className={`p-2 border-0 ${formErrors.totalAwayDays ? 'is-invalid' : ''}`}
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
       
        <div className="d-flex justify-content-center gap-3  pt-3">
        <button
            type="button"
            className="save-button  "
            style={{  whiteSpace:"nowrap"}}
            onClick={handleSubmit}
          >
        {isSubmitting ? (<div>

          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
Loading..
        </div>) : (<div>Update Now</div>)}
        </button>
         
        </div>
       </>
      </div>
    )}
    </>
    </div>
  );
}

export default ProjectFTEModal;