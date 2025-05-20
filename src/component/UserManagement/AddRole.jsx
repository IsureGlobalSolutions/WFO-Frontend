import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPermissionsData, addEditRoleManagement, userRole } from "../../redux/features/auth/authSlice";
import "./UserManage.css";
import LatestSekeltonLoader from "../SekeltonLoader/LatestSekeltonLoader";
import { useStepContext } from "@mui/material";

function AddRole({ onBack, selectedModule }) {
  const dispatch = useDispatch();
  const { Permissionsdata, loading, error } = useSelector((state) => state.auth);
  console.log("🚀 ~ AddRole ~ Permissionsdata:", Permissionsdata)
  const [IsSubmitting, setIsSubmitting] = useState(false)
  const [IsLoading, setIsLoading] = useState(false)
 
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    permissionAndSubPermissions: [],
  });

  const [selectedPermissions, setSelectedPermissions] = useState({});

  // Fetch data on component mount
  useEffect(() => {
    dispatch(getPermissionsData());
  }, [dispatch]);

  // Initialize selected permissions when data loads
  useEffect(() => {
    if (Permissionsdata && Permissionsdata.length > 0) {
      const initialSelected = {};
      Permissionsdata.forEach(perm => {
        initialSelected[perm.permissionId] = {
          permissionId: perm.permissionId,
          permissionName: perm.permissionName,
          subPermissions: perm.subPermissions.map(sub => ({
            subPermissionId: sub.subPermissionId,
            subPermissionName: sub.subPermissionName,
            isAllowed: false
          }))
        };
      });
      setSelectedPermissions(initialSelected);
    }
  }, [Permissionsdata]);

  const handleMainPermissionChange = (permissionId) => {
    setSelectedPermissions(prev => ({
      ...prev,
      [permissionId]: {
        ...prev[permissionId],
        isAllowed: !prev[permissionId]?.isAllowed,
        subPermissions: prev[permissionId]?.subPermissions || []
      }
    }));
  };

  const handleSubPermissionChange = (permissionId, subPermissionId) => {
    setSelectedPermissions(prev => ({
      ...prev,
      [permissionId]: {
        ...prev[permissionId],
        isAllowed: true, 
        subPermissions: prev[permissionId]?.subPermissions?.map(sub => 
          sub.subPermissionId === subPermissionId 
            ? { ...sub, isAllowed: !sub.isAllowed } 
            : sub
        ) || []
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const permissionsToSend = Object.entries(selectedPermissions)
      .filter(([_, perm]) => perm.isAllowed || (perm.subPermissions?.some(sub => sub.isAllowed)))
      .map(([permissionId, perm]) => ({
        permissionId: Number(permissionId),
        subPermissionIds: perm.subPermissions?.filter(sub => sub.isAllowed).map(sub => sub.subPermissionId) || []
      }));
  
    const dataToSend = {
      ...formData,
      permissionAndSubPermissions: permissionsToSend
    };
  
    try {
      await dispatch(addEditRoleManagement(dataToSend)).unwrap();
      setFormData({
        name: "",
        description: "",
        permissionAndSubPermissions: [],
      });
      setIsSubmitting(false);
      dispatch(userRole())
      onBack();
    } catch (error) {
      console.error("Failed to save role:", error);
    }
  };
   

  if (error) {
    return (
      <div className="alert alert-danger m-3">
        Error loading permissions: {error.message || "Unknown error occurred"}
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0E3E9"}} >
       
      <div className="d-flex ms-4 mt-3">
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
      <p className=" ps-2 mb-0 pb-0"
      style={{ 
        fontWeight: 600, 
        fontSize: '20px', 
        lineHeight: '100%', 
        letterSpacing: '0px', 
        color: "#000000",
        fontFamily: "Poppins, sans-serif",
      }}
      >
        Add Role
      </p>  
      </div>
      <form id="frmUserRoles" className="ms-2 p-4 ps-3 mb-2" onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="row g-4">
            <div className="col-6 form-group">
              <label htmlFor="Name" className="form-label mb-2"
              
              >
                Role Name
              </label>
              <input
                required
                name="Name"
                className="form-control form-control-lg"
                placeholder="Role Name"
                value={formData.name}
                style={{
                  border: "1px solid #D6D6D6",
                  borderRadius: '8px',
                }}
                type="text"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="col-6 form-group"> 
              <label htmlFor="Description" className="form-label mb-2"
                style={{
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '19px',
                  letterSpacing: '0px',
                  color: "#040F0F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Role Description 
              </label>
              <input
                required
                name="Description"
                className="form-control form-control-lg"
                placeholder="Role Description"
                value={formData.description}
                style={{
                  border: "1px solid #D6D6D6",
                  borderRadius: '8px',
                }}
                type="text"
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="col-12 mt-4 g-3">
          <div className="d-flex justify-content-between w-75 mb-3">
            <h6 className="mb-0" style={{
              fontWeight: 600, 
              fontSize: '20px', 
              lineHeight: '100%', 
              letterSpacing: '0px', 
              color: "#000000",
              fontFamily: "Poppins, sans-serif",
            }}
            >
              Select Permission
            </h6>
          </div>    
          
      {
        IsLoading ? (
          <LatestSekeltonLoader/>
        ) : (
          <div className="col-12 p-0">
          {Permissionsdata?.length > 0 ? (
            <div className="row gx-3">
              {Permissionsdata.map(permission => (
                <div key={permission.permissionId} className="col-md-6 col-lg-3 col-sm-6 mb-4">
                  <div className="p-2" style={{ border: '1px solid #E9EAEB', borderRadius: '20px' }}>
                    <div className="card-header d-flex justify-content-between align-items-center"
                      style={{
                        // borderBottom: '1px solid #E9EAEB',
                        padding: '12px 16px',
                     
                      }}
                    >
                      <div className="form-check mt-1 ">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={selectedPermissions[permission.permissionId]?.isAllowed || false}
                          onChange={() => handleMainPermissionChange(permission.permissionId)}
                          style={{
                            width: '16px',
                            height: '16px',
                            marginTop:"2px"
                          }}
                        />
                        <label className="form-check-Permissions ms-2" >
                          {permission.permissionName}
                        </label>
                      </div>
                    </div>
                    <div className="card-body ms-3">
                      <div className="row">
                        {permission.subPermissions?.map(subPermission => (
                          <div key={subPermission.subPermissionId} className=" col-md-4 col-lg-3 col-sm-4 mb-2">
                            <div className="form-check ps-0">
                              <label className="form-check-label ">
                                {subPermission.subPermissionName}
                              </label>
                              <div className="form-check form-switch ">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    checked={
      selectedPermissions[permission.permissionId]?.subPermissions?.find(
        sub => sub.subPermissionId === subPermission.subPermissionId
      )?.isAllowed || false
    }
    onChange={() => handleSubPermissionChange(permission.permissionId, subPermission.subPermissionId)}
  />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">No permissions available</p>
          )}
        </div>
      

        )
      }
        </div>

        <div className="d-flex justify-content-center mt-3">
       
          <button
            type="submit"
            id="btnSave"
            className="save-button"
            disabled={loading}
          >
 {IsSubmitting ? (
    <>
  <span class="spinner-border spinner-border-sm me-2 " role="status" aria-hidden="true"></span>
  Loading...
    </>
  ) : (
    'Add Now'
  )}          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRole;