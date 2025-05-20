
import { useEffect, useState , useRef} from "react";
import {
  getJobTitle,
  getDepartmentData,
  getSubDepartment,
  getTeam,
  userRole,
  getEmployetypeData,
} from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function EmploymentDetails({ onChange = () => {}, showUserComponent, onSubmit = () => {} }) {
  const [jobData, setJobData] = useState([]);
  const [depData, setDepData] = useState([]);
  const [subDepData, setSubDepData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [userRoleData, setUserRoleData] = useState([]);
  const [employeeData, setEmployeeRoleData] = useState([])  
  const fileInputRef = useRef(null);

  const location =useLocation()
  console.log("🚀 ~ EmploymentDetails ~ location:", location)
  const [formData, setFormData] = useState({
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
  const [formValid, setFormValid] = useState(false);
      const dropdownRef = useRef(null);

  const dispatch = useDispatch();

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
        setJobData(jobRes.payload);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [dispatch]);

  // Validate form whenever formData changes
  useEffect(() => {
    const isValid = (
      formData.EmployeeTypeId &&
      formData.Department &&
      formData.Designation &&
      formData.Role &&
      formData.JoiningDate
    );
    setFormValid(isValid);
    onChange(formData); // Send updated data to parent
  }, [formData, onChange]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      onSubmit(formData);
    }
  };

  return (
    <div className="p-4" style={{backgroundColor:"#FFFFFF", border:"1px solid #E0E3E9"}}>
      <div className="step-content" data-step="step2">
        <form onSubmit={handleSubmit}>
          <div className="row p-4 pb-0 gap-5">
            <div className="col-12 col-sm-6 col-md-3  ">
              <label
                htmlFor="EmployeeTypeId"
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Employee Type
              </label>
              <select
                name="EmployeeTypeId"
                id="EmployeeTypeId"
                className="form-control"
                style={{
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif",
                  color: "#A3A3A3",
                }}
                value={formData.EmployeeTypeId}
                onChange={handleInputChange}
                required
              >
                <option value="">Select EmployeeType</option>
                {employeeData?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 col-sm-6  col-md-3  ">
              <label 
                htmlFor="Department" 
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Department
              </label>
              <select
                name="Department"
                id="DepartmentId"
                className="form-control"
                value={formData.Department}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Department</option>
                {depData?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 col-sm-6  col-md-3  ">
              <label 
                htmlFor="SubDepartment" 
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Sub Department
              </label>
              <select
                name="SubDepartment"
                id="SubDepartmentId"
                className="form-control"
                value={formData.SubDepartment}
                onChange={handleInputChange}
              >
                <option value="">Select SubDepartment</option>
                {subDepData?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row p-4 pb-0 gap-5">
           
<div className="col-12 col-sm-6  col-md-3 ">
              <label 
                htmlFor="Role" 
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Role
              </label>
              <select
                name="Role"
                id="RoleId"
                className="form-control"
                value={formData.Role}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Role</option>
                {userRoleData?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 col-sm-6 col-md-3  ">
              <label 
                htmlFor="Designation" 
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Designation
              </label>
              <select
                name="Designation"
                id="DesignationId"
                className="form-control"
                value={formData.Designation}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Designation</option>
                {jobData?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
  <div className="col-12 col-sm-6 mb-3 col-md-3">
              <label 
                htmlFor="Team" 
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Team
              </label>
              <select
                name="Team"
                id="TeamId"
                className="form-control"
                value={formData.Team}
                onChange={handleInputChange}
              >
                <option value="">Select Team</option>
                {teamData?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row p-4 pb-0 gap-5">
            
          <div className="col-12  mb-3 col-md-3">
              <label 
                htmlFor="JoiningDate" 
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Joining Date
              </label>
              <input
                name="JoiningDate"
                type="date"
                id="JoiningDate"
                className="form-control"
                value={formData.JoiningDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className=" col-12  mb-3 col-md-3">
              <label 
                htmlFor="LeavingDate" 
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Leaving Date
              </label>
              <input
                name="LeavingDate"
                id="LeavingDate"
                type="date"
                className="form-control"
                value={formData.LeavingDate}
                onChange={handleInputChange}
              />
            </div>
          

            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <label 
                htmlFor="IsApprover" 
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Is Approver
              </label>
              <select
                name="IsApprover"
                id="IsApprover"
                className="form-control"
                value={formData.IsApprover}
                onChange={handleInputChange}
              >
                <option value="1">No</option>
                <option value="2">Yes</option>
              </select>
            </div>
          </div>

         

          

          <div className="step-footer d-flex justify-content-center mt-3 gap-2 p-4">
           
            <button 
              type="submit" 
              className="blue-button d-flex justify-content-center p-3 ps-5 pe-5" 
              disabled={!formValid}
              onClick={onSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmploymentDetails;


