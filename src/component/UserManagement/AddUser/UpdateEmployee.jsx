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
  updateEmployeeData,
  getEmployeeDetailById,
  getAllEmployees,
} from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../plugins/Loader";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import LatestSekeltonLoader from "../../SekeltonLoader/LatestSekeltonLoader";
function UpdateEmployee({ selectedModule , onBack}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const employeeId = state?.id;

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    address: '',
    imagePath: ''
  });

  // Employment Information State
  const [employmentInfo, setEmploymentInfo] = useState({
    employeeTypeId: '',
    departmentId: '',
    subDepartmentId: '',
    designationId: '',
    roleId: '',
    teamId: '',
    joiningDate: ''
  });

  // Data for dropdowns
  const [jobData, setJobData] = useState([]);
  const [depData, setDepData] = useState([]);
  const [subDepData, setSubDepData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [userRoleData, setUserRoleData] = useState([]);
  const [employeeData, setEmployeeRoleData] = useState([]);
  const [loading, setLoading] = useState(false);
const [loadingData, setloadingData] = useState(true)
  // Fetch employee data and dropdown options
  useEffect(() => {
    const fetchData = async () => {
      try {
         setloadingData(true)
        // Fetch dropdown options
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
        setJobData(jobRes.payload);

        if (employeeId) {
           
          const response = await dispatch(getEmployeeDetailById(employeeId));
          if (response.payload) {
            const employee = response.payload;
            setPersonalInfo({
              firstName: employee.firstName || '',
              lastName: employee.lastName || '',
              email: employee.email || '',
              phoneNumber: employee.phoneNumber || '',
              country: employee.country || '',
              address: employee.address || '',
              imagePath: employee.imagePath || ''
            });
            setEmploymentInfo({
              employeeTypeId: employee.employeeTypeId || '',
              departmentId: employee.departmentId || '',
              subDepartmentId: employee.subDepartmentId || '',
              designationId: employee.designationId || '',
              roleId: employee.roleId || '',
              teamId: employee.teamId || '',
              joiningDate: employee.joiningDate ? employee.joiningDate.split('T')[0] : ''
            });
          }
           
        }
      } catch (err) {       
        toast.error('Failed to load data');
      }finally {
        setloadingData(false); // Stop loading regardless of success/error
      }
       
    };

    fetchData();
  }, [dispatch, employeeId]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
const handleClick =() =>{
onBack();
}
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
    }
  };

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmploymentInfoChange = (event) => {
    const { name, value } = event.target;
    setEmploymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("Id", employeeId);
    formData.append("FirstName", personalInfo.firstName);
    formData.append("LastName", personalInfo.lastName);
    formData.append("Email", personalInfo.email);
    formData.append("PhoneNumber", personalInfo.phoneNumber);
    formData.append("Country", personalInfo.country);
    formData.append("Address", personalInfo.address);
    formData.append("EmployeeTypeId", employmentInfo.employeeTypeId);
    formData.append("DepartmentId", employmentInfo.departmentId);
    formData.append("SubDepartmentId", employmentInfo.subDepartmentId);
    formData.append("DesignationId", employmentInfo.designationId);
    formData.append("RoleId", employmentInfo.roleId);
    formData.append("TeamId", employmentInfo.teamId);
    formData.append("JoiningDate", employmentInfo.joiningDate);
    
    if (selectedImage) {
      formData.append("ProfileImage", selectedImage);
    }

    try {
      const response = await dispatch(updateEmployeeData(formData));
      if (response.payload.isSuccess) {
        toast.success(response.payload.alertMessage);
        // dispatch(getAllEmployees())
        navigate('/employeesdetail'); // Redirect after successful update
      } else {
        toast.error(response.payload.alertMessage);
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      toast.error('Error updating employee. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const dropdownStyle = {
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.75rem center',
    backgroundSize: '1em',
  };

  return (
    <>
    {
        loadingData? ( 
        
        <div className=" bg-white p-3 rounded-3 shadow-sm mt-4 mb-4 h-100">
       <LatestSekeltonLoader/>
        </div>

         )
            :(
                <>
                
                         <div className="childsection pb-2 pt-0">
        <h1>User Management</h1>
      </div>
      <div className="AddEmployee">
        <div className="topnavbar-card d-flex p-2 ps-3">
          <h1 className="m-0">Home</h1>
          <h1 className="ms-1 me-1 m-0">/</h1>
          <h1 className="m-0">User Management</h1>
          <h1 className="ms-1 me-1 m-0">/</h1>
          <h1 className="m-0 text-primary">{selectedModule}</h1>
        </div>
        <main>
          <div className="profile-form-container p-5  pt-2">
            <form onSubmit={handleSubmit}>
              {/* <div className="d-flex flex-column align-items-center mb-4">
                <div className="mb-3">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="d-none"
                    accept="image/*"
                  />
                  {selectedImage  ? (
                    <img
                      src={URL.createObjectURL(selectedImage) }
                      
                      
                      onClick={handleImageClick}
                      className="profile-img"
                      alt="Profile"
                    />
                  ): 
                  !selectedImage && personalInfo?.imagePath ? (
                    <img
                    src={personalInfo?.imagePath} 
                     
                    onClick={handleImageClick}
                    className="profile-img"
                    alt="Profile"
                  />
                  )
                  : (
                    <div className="profile-img d-flex justify-content-center align-items-center" onClick={handleImageClick}>
                      <ProfileAvatar className="profile-SVG" />
                    </div>
                  )}
                </div>
                <h1 className="upload-photo-title">Upload Photo</h1>
              </div> */}
  <div className="mt-3" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{ cursor: 'pointer' }}
                    onClick={onBack}     
                    >
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H3.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708.708L3.707 7.5H14.5a.5.5 0 0 1 .5.5z"/>
                  </svg> */}
                  <p style={{
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '19px',
                    letterSpacing: '0px',
                    color: "#040F0F",
                    fontFamily: "Poppins, sans-serif",
                    margin: 0
                  }}
                  >
                    Update Employee Data
                  </p>
                </div>
              <div className="row g-4 mb-4 mt-2">
                <div className="col-md-4 col-12">
                  <label htmlFor="firstName" className="label-tag">First Name</label>
                  <input
                  
                    name="firstName"
                    id="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="col-md-4 col-12">
                  <label htmlFor="lastName" className="label-tag">Last Name</label>
                  <input
                    name="lastName"
                    id="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={personalInfo.lastName}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="col-md-4 col-12">
                  <label htmlFor="email" className="label-tag">Email Address</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="col-md-4 col-12">
                  <label htmlFor="phoneNumber" className="label-tag">Mobile Number</label>
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile number"
                    value={personalInfo.phoneNumber}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="col-md-4 col-12">
                  <label htmlFor="country" className="label-tag">Country</label>
                  <input
                    name="country"
                    id="country"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Country"
                    value={personalInfo.country}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="col-md-4 col-12">
                  <label htmlFor="address" className="label-tag">Address</label>
                  <input
                    name="address"
                    id="address"
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    value={personalInfo.address}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-4 col-12">
                  <label htmlFor="employeeTypeId" className="label-tag">Employee Type</label>
                  <select
                    name="employeeTypeId"
                    id="employeeTypeId"
                    className="form-control"
                    style={dropdownStyle}
                    value={employmentInfo.employeeTypeId}
                    onChange={handleEmploymentInfoChange}
                  >
                    <option value="">Select EmployeeType</option>
                    {employeeData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4 col-12">
                  <label htmlFor="departmentId" className="label-tag">Department</label>
                  <select
                    name="departmentId"
                    id="departmentId"
                    className="form-control"
                    style={dropdownStyle}
                    value={employmentInfo.departmentId}
                    onChange={handleEmploymentInfoChange}
                  >
                    <option value="">Select Department</option>
                    {depData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4 col-12">
                  <label htmlFor="subDepartmentId" className="label-tag">Sub Department</label>
                  <select
                    name="subDepartmentId"
                    id="subDepartmentId"
                    className="form-control"
                    style={dropdownStyle}
                    value={employmentInfo.subDepartmentId}
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
                  <label htmlFor="roleId" className="label-tag">Role</label>
                  <select
                    name="roleId"
                    id="roleId"
                    className="form-control"
                    style={dropdownStyle}
                    value={employmentInfo.roleId}
                    onChange={handleEmploymentInfoChange}
                  >
                    <option value="">Select Role</option>
                    {userRoleData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div className="col-md-4 col-12">
                  <label htmlFor="designationId" className="label-tag">Designation</label>
                  <select
                    name="designationId"
                    id="designationId"
                    className="form-control"
                    style={dropdownStyle}
                    value={employmentInfo.designationId}
                    onChange={handleEmploymentInfoChange}
                  >
                    <option value="">Select Designation</option>
                    {jobData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div> */}

                <div className="col-md-4 col-12">
                  <label htmlFor="teamId" className="form-label">Team</label>
                  <select
                    name="teamId"
                    id="teamId"
                    className="form-control"
                    style={dropdownStyle}
                    value={employmentInfo.teamId}
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

                <div className="col-md-4 col-12">
                  <label htmlFor="joiningDate" className="form-label">Joining Date</label>
                  <input
                    name="joiningDate"
                    type="date"
                    id="joiningDate"
                    className="form-control"
                    value={employmentInfo.joiningDate}
                    onChange={handleEmploymentInfoChange}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <button
                  type="submit"
                  className="save-button"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Update'}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div> 
                </>

      
           
        )
    }
      
    </>
  );
}

export default UpdateEmployee;