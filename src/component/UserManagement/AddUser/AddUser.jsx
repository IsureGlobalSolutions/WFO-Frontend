import React, { useState, useRef, useEffect } from "react";
import '../UserManage.css';
import { ReactComponent as ProfileAvatar } from '../../../assets/WfoAssets/SVG/ProfileImage.svg';
import {
  getJobTitle,
  getDepartmentData,
  getSubDepartment,
  getTeam,
  userRole,
  getEmployetypeData,
  addEmployeeApi,
  getAllEmployees,
} from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { ReactComponent as Dropdownicon } from '../../../assets/WfoAssets/SVG/SidebarVector.svg';  
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddUser({ onChange = () => {}, showEmployeeComponent, selectedModule, onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('personal');
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showValidationAlert, setShowValidationAlert] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    DateOfBirth: '',
    Password: '',
    ConfirmPassword: '',
    Country: '',
    Address: ''
  });

  // Employment Information State
  const [employmentInfo, setEmploymentInfo] = useState({
    EmployeeTypeId: '',
    Department: '',
    SubDepartment: '',
    Designation: '',
    Role: '',
    Team: '',
    JoiningDate: '',
    LeavingDate: '',
    IsApprover: '1'
  });

  // Data for dropdowns
  const [jobData, setJobData] = useState([]);
  const [depData, setDepData] = useState([]);
  const [subDepData, setSubDepData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [userRoleData, setUserRoleData] = useState([]);
  const [employeeData, setEmployeeRoleData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const missing = [];
    let hasErrors = false;

    // Personal info validation
    if (!personalInfo.FirstName.trim()) {
      newErrors.FirstName = 'Please fill the First Name field';
      missing.push('First Name');
      hasErrors = true;
    }
    if (!personalInfo.LastName.trim()) {
      newErrors.LastName = 'Please fill the Last Name field';
      missing.push('Last Name');
      hasErrors = true;
    }
    if (!personalInfo.Email.trim()) {
      newErrors.Email = 'Please fill the Email field';
      missing.push('Email');
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.Email)) {
      newErrors.Email = 'Email is invalid';
      hasErrors = true;
    }
    if (!personalInfo.PhoneNumber.trim()) {
      newErrors.PhoneNumber = 'Please fill the Phone Number field';
      missing.push('Phone Number');
      hasErrors = true;
    }
    if (!personalInfo.Password) {
      newErrors.Password = 'Please fill the Password field';
      missing.push('Password');
      hasErrors = true;
    } else if (personalInfo.Password.length < 6) {
      newErrors.Password = 'Password must be at least 6 characters';
      hasErrors = true;
    }
    if (personalInfo.Password !== personalInfo.ConfirmPassword) {
      newErrors.ConfirmPassword = 'Passwords do not match';
      hasErrors = true;
    }
    if (!personalInfo.Country.trim()) {
      newErrors.Country = 'Please fill the Country field';
      missing.push('Country');
      hasErrors = true;
    }
    if (!personalInfo.Address.trim()) {
      newErrors.Address = 'Please fill the Address field';
      missing.push('Address');
      hasErrors = true;
    }

    // Employment info validation
    if (!employmentInfo.EmployeeTypeId) {
      newErrors.EmployeeTypeId = 'Please select Employee Type';
      missing.push('Employee Type');
      hasErrors = true;
    }
    if (!employmentInfo.Department) {
      newErrors.Department = 'Please select Department';
      missing.push('Department');
      hasErrors = true;
    }
    if (!employmentInfo.Role) {
      newErrors.Role = 'Please select Role';
      missing.push('Role');
      hasErrors = true;
    }
    if (!employmentInfo.JoiningDate) {
      newErrors.JoiningDate = 'Please select Joining Date';
      missing.push('Joining Date');
      hasErrors = true;
    }

    setErrors(newErrors);
    setMissingFields(missing);
    
    // Add data-error attribute to fields with errors
    Object.keys(newErrors).forEach(key => {
      const element = document.querySelector(`[name="${key}"]`);
      if (element) {
        element.setAttribute('data-error', 'true');
      }
    });

    return !hasErrors;
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (!file.type.match('image.*')) {
        toast.error('Please select an image file');
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast.error('Image size should be less than 2MB');
        return;
      }
      setSelectedImage(file);
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
    onChange({ ...personalInfo, [name]: value });
  };

  const handleEmploymentInfoChange = (event) => {
    console.log("🚀 ~ handleEmploymentInfoChange ~ event:", event.terget)
    const { name, value } = event.target;
    setEmploymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
    onChange({ ...employmentInfo, [name]: value });
  };

  // Fetch all data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          employeeRes,
          roleRes,
          teamRes,
          subDepRes,
          depRes,
          jobRes
        ] = await Promise.all([
          dispatch(getEmployetypeData()),
          dispatch(userRole()),
          dispatch(getTeam()),
          dispatch(getSubDepartment()),
          dispatch(getDepartmentData()),
          dispatch(getJobTitle())
        ]);

        setEmployeeRoleData(employeeRes.payload);
        setUserRoleData(roleRes.payload);
        setTeamData(teamRes.payload);
        setSubDepData(subDepRes.payload);
        setDepData(depRes.payload);
      } catch (err) {
        console.error("Error fetching data:", err);
        toast.error('Failed to load dropdown data');
      }
    };

    fetchData();
  }, [dispatch]);

  const submitData = async (event) => {
    event.preventDefault();
    
    const isValid = validateForm();
  
    if (!isValid) {
      setShowValidationAlert(true);
      // Scroll to the first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("FirstName", personalInfo.FirstName);
    formData.append("LastName", personalInfo.LastName);
    formData.append("Email", personalInfo.Email);
    formData.append("PhoneNumber", personalInfo.PhoneNumber);
    formData.append("Password", personalInfo.Password);
    formData.append("ConfirmPassword", personalInfo.ConfirmPassword);
    formData.append("Country", personalInfo.Country);
    formData.append("Address", personalInfo.Address);
    formData.append("EmployeeTypeId", employmentInfo.EmployeeTypeId);
    formData.append("DepartmentId", employmentInfo.Department);
    formData.append("SubDepartmentId", employmentInfo.SubDepartment);
    formData.append("DesignationId", employmentInfo.Designation);
    formData.append("RoleId", employmentInfo.Role);
    formData.append("TeamId", employmentInfo.Team); 
        formData.append("JoiningDate", employmentInfo.JoiningDate);

    if (selectedImage) {
      formData.append("ProfileImage", selectedImage, selectedImage.name);
    }

    try {
      dispatch(addEmployeeApi(formData))
        .then((response) => {
          if (response.payload.isSuccess) {
            dispatch(getAllEmployees())
            toast.success(response.payload.alertMessage);
            // Reset form on success
            setPersonalInfo({
              FirstName: '',
              LastName: '',
              Email: '',
              PhoneNumber: '',
              DateOfBirth: '',
              Password: '',
              ConfirmPassword: '',
              Country: '',
              Address: ''
            });
            setEmploymentInfo({
              EmployeeTypeId: '',
              Department: '',
              SubDepartment: '',
              Designation: '',
              Role: '',
              Team: '',
              JoiningDate: '',
              LeavingDate: '',
              IsApprover: '1'
            });
            setSelectedImage(null);
            onBack();
          } else {
            toast.error(response.payload.alertMessage);
          }
        
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Error creating user. Please try again.');
      setIsSubmitting(false);
    }
  };
  
  // Custom dropdown arrow style
  const dropdownStyle = {
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.75rem center',
    backgroundSize: '1em',
  };

  return (
    <>
      <div className="AddEmployee">
        <main>
          <div className="profile-form-container p-5 pt-3">
            {/* Validation Alert Modal */}
            

            <div className="step-content">
              <form className="step-tab-panel" role="tabpanel" data-step="step1">
                <div className="mt-3" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                  <p style={{
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '19px',
                    letterSpacing: '0px',
                    color: "#040F0F",
                    fontFamily: "Poppins, sans-serif",
                    margin: 0
                  }}>
                    Add Employee Data
                  </p>
                </div>

                <div className="row g-4 mb-4 mt-3 ">
                  <div className="col-md-4 col-12">
                    <label htmlFor="FirstName" className="form-label">First Name *</label>
                    <input
                      name="FirstName"
                      id="FirstName"
                      type="text"
                      className={`form-control ${errors.FirstName ? 'is-invalid' : ''}`}
                      placeholder="First Name"
                      value={personalInfo.FirstName}
                      onChange={handlePersonalInfoChange}
                      onBlur={() => handleBlur('FirstName')}
                    />
                    {errors.FirstName && <div className="invalid-feedback">{errors.FirstName}</div>}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="LastName" className="form-label">Last Name *</label>
                    <input
                      name="LastName"
                      id="LastName"
                      type="text"
                      className={`form-control ${errors.LastName ? 'is-invalid' : ''}`}
                      placeholder="Last Name"
                      value={personalInfo.LastName}
                      onChange={handlePersonalInfoChange}
                      onBlur={() => handleBlur('LastName')}
                    />
                    {errors.LastName && <div className="invalid-feedback">{errors.LastName}</div>}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="Email" className="form-label">Email Address *</label>
                    <input
                      name="Email"
                      id="Email"
                      type="email"
                      className={`form-control ${errors.Email ? 'is-invalid' : ''}`}
                      placeholder="Email address"
                      value={personalInfo.Email}
                      onChange={handlePersonalInfoChange}
                      onBlur={() => handleBlur('Email')}
                    />
                    {errors.Email && <div className="invalid-feedback">{errors.Email}</div>}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="PhoneNumber" className="form-label">Mobile Number *</label>
                    <input
                      name="PhoneNumber"
                      id="PhoneNumber"
                      type="text"
                      className={`form-control ${errors.PhoneNumber ? 'is-invalid' : ''}`}
                      placeholder="Enter Mobile number"
                      value={personalInfo.PhoneNumber}
                      onChange={handlePersonalInfoChange}
                      onBlur={() => handleBlur('PhoneNumber')}
                    />
                    {errors.PhoneNumber && <div className="invalid-feedback">{errors.PhoneNumber}</div>}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="Password" className="form-label">Password *</label>
                    <input
                      name="Password"
                      id="Password"
                      type="password"
                      className={`form-control ${errors.Password ? 'is-invalid' : ''}`}
                      placeholder="Password"
                      value={personalInfo.Password}
                      onChange={handlePersonalInfoChange}
                      onBlur={() => handleBlur('Password')}
                    />
                    {errors.Password && <div className="invalid-feedback">{errors.Password}</div>}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password *</label>
                    <input
                      name="ConfirmPassword"
                      id="ConfirmPassword"
                      type="password"
                      className={`form-control ${errors.ConfirmPassword ? 'is-invalid' : ''}`}
                      placeholder="Confirm Password"
                      value={personalInfo.ConfirmPassword}
                      onChange={handlePersonalInfoChange}
                      onBlur={() => handleBlur('ConfirmPassword')}
                    />
                    {errors.ConfirmPassword && <div className="invalid-feedback">{errors.ConfirmPassword}</div>}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="Country" className="form-label">Country *</label>
                    <input
                      name="Country"
                      id="Country"
                      type="text"
                      className={`form-control ${errors.Country ? 'is-invalid' : ''}`}
                      placeholder="Enter Your Country"
                      value={personalInfo.Country}
                      onChange={handlePersonalInfoChange}
                      onBlur={() => handleBlur('Country')}
                    />
                    {errors.Country && <div className="invalid-feedback">{errors.Country}</div>}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="Address" className="form-label">Address *</label>
                    <input
                      name="Address"
                      id="Address"
                      type="text"
                      className={`form-control ${errors.Address ? 'is-invalid' : ''}`}
                      placeholder="Enter Address"
                      value={personalInfo.Address}
                      onChange={handlePersonalInfoChange}
                      onBlur={() => handleBlur('Address')}
                    />
                    {errors.Address && <div className="invalid-feedback">{errors.Address}</div>}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="JoiningDate" className="form-label">Joining Date *</label>
                    <input
                      name="JoiningDate"
                      type="date"
                      id="JoiningDate"
                      className={`form-control ${errors.JoiningDate ? 'is-invalid' : ''}`}
                      value={employmentInfo.JoiningDate}
                      onChange={handleEmploymentInfoChange}
                      onBlur={() => handleBlur('JoiningDate')}
                    />
                    {errors.JoiningDate && <div className="invalid-feedback">{errors.JoiningDate}</div>}
                  </div>
                </div>
              </form>
            </div>

            <div className="step-content">
              <form className="step-tab-panel" role="tabpanel" data-step="step2" onSubmit={submitData}>
                <div className="row g-4 mb-4">
                  <div className="col-md-4 col-12">
                    <label htmlFor="EmployeeTypeId" className="form-label">Employee Type *</label>
                    <select
                      name="EmployeeTypeId"
                      id="EmployeeTypeId"
                      className={`form-control ${errors.EmployeeTypeId ? 'is-invalid' : ''}`}
                      style={dropdownStyle}
                      value={employmentInfo.EmployeeTypeId}
                      onChange={handleEmploymentInfoChange}
                      onBlur={() => handleBlur('EmployeeTypeId')}
                    >
                      <option value="">Select EmployeeType</option>
                      {employeeData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                    {errors.EmployeeTypeId && <div className="invalid-feedback">{errors.EmployeeTypeId}</div>}
                  </div>

                  <div className="col-md-4 col-12">
                    <label htmlFor="Department" className="form-label">Department *</label>
                    <select
                      name="Department"
                      id="DepartmentId"
                      className={`form-control ${errors.Department ? 'is-invalid' : ''}`}
                      style={dropdownStyle}
                      value={employmentInfo.Department}
                      onChange={handleEmploymentInfoChange}
                      onBlur={() => handleBlur('Department')}
                    >
                      <option value="">Select Department</option>
                      {depData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                    {errors.Department && <div className="invalid-feedback">{errors.Department}</div>}
                  </div>

                  <div className="col-md-4 col-12">
                    <label htmlFor="SubDepartment" className="form-label">Sub Department</label>
                    <select
                      name="SubDepartment"
                      id="SubDepartmentId"
                      className="form-control"
                      style={dropdownStyle}
                      value={employmentInfo.SubDepartment}
                      onChange={handleEmploymentInfoChange}
                    >
                      <option value="">Select SubDepartment</option>
                      {subDepData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4 col-12">
                    <label htmlFor="Role" className="form-label">Role *</label>
                    <select
                      name="Role"
                      id="RoleId"
                      className={`form-control ${errors.Role ? 'is-invalid' : ''}`}
                      style={dropdownStyle}
                      value={employmentInfo.Role}
                      onChange={handleEmploymentInfoChange}
                      onBlur={() => handleBlur('Role')}
                    >
                      <option value="">Select Role</option>
                      {userRoleData?.map((data) => (
                        <option key={data.id} value={data.employeeRoleId}>
                          {data.employeeRoleName}
                        </option>
                      ))}
                    </select>
                    {errors.Role && <div className="invalid-feedback">{errors.Role}</div>}
                  </div>

                  <div className="col-md-4 col-12">
                    <label htmlFor="Team" className="form-label">Team</label>
                    <select
                      name="Team"
                      id="TeamId"
                      className="form-control"
                      style={dropdownStyle}
                      value={employmentInfo.Team}
                      onChange={handleEmploymentInfoChange}
                    >
                      <option value="">Select Team</option>
                      {teamData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                     {/* <div className="col-md-4 col-12">
                    <label htmlFor="Designation" className="form-label">Designation *</label>
                    <select
                      name="Designation"
                      id="DesignationId"
                      className={`form-control ${errors.Designation && touched.Designation ? 'is-invalid' : ''}`}
                      style={dropdownStyle}
                      value={employmentInfo.Designation}
                      onChange={handleEmploymentInfoChange}
                      onBlur={() => handleBlur('Designation')}
                      
                    >
                      <option value="">Select Designation</option>
                      {jobData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                    {errors.Designation && touched.Designation && <div className="invalid-feedback">{errors.Designation}</div>}
                  </div> */}
                </div>

                <div className="d-flex justify-content-center gap-3 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="save-button"
                    style={{
                      opacity: isSubmitting ? 0.6 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? 'Adding...' : 'Add Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AddUser;