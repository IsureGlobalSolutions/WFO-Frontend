import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  getPermissionsData, 
  addEditRoleManagement, 
  getEmployRolePermissionById,
  userRole,
  UpdateEmployeeRole
} from "../../redux/features/auth/authSlice";
// import "./UserManage.css";
import LatestSekeltonLoader from "../SekeltonLoader/LatestSekeltonLoader";

function AddRoleModal({ roleId, onBack }) {
  const dispatch = useDispatch();
  const { 
    Permissionsdata, 
    loading, 
    error,
    rolePermissions
  } = useSelector((state) => state.auth);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
 
  const [formData, setFormData] = useState({
    id: roleId || null,
    name: "",
    description: "",
    permissionAndSubPermissions: [],
  });

  const [selectedPermissions, setSelectedPermissions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getPermissionsData());
        
        if (roleId) {
          await dispatch(getEmployRolePermissionById(roleId)).then((res) => {
            console.log("🚀 ~ API Response:", res);
            
            // Set form data
            setFormData({
              id: res.payload.employeeRoleId,
              name: res.payload.employeeRoleName || "",
              description: res.payload.description || "",
              permissionAndSubPermissions: []
            });
  
            // Create a map of all permissions from the API response
            const allPermissionsMap = {};
            Permissionsdata?.forEach(perm => {
              allPermissionsMap[perm.permissionId] = {
                permissionId: perm.permissionId,
                permissionName: perm.permissionName,
                isAllowed: false, // Default to false
                subPermissions: perm.subPermissions.map(sub => ({
                  subPermissionId: sub.subPermissionId,
                  subPermissionName: sub.subPermissionName,
                  isAllowed: false // Default to false
                }))
              };
            });
  
            // Update the map with the role's existing permissions
            if (res.payload.userPermissions) {
              res.payload.userPermissions.forEach(perm => {
                if (allPermissionsMap[perm.permissionId]) {
                  // Set main permission to true if it has any sub-permissions
                  allPermissionsMap[perm.permissionId].isAllowed = 
                    perm.subPermissions && perm.subPermissions.length > 0;
                  
                  // Set sub-permissions
                  if (perm.subPermissions) {
                    perm.subPermissions.forEach(sub => {
                      const subPermIndex = allPermissionsMap[perm.permissionId].subPermissions.findIndex(
                        sp => sp.subPermissionId === sub.subPermissionId
                      );
                      if (subPermIndex !== -1) {
                        allPermissionsMap[perm.permissionId].subPermissions[subPermIndex].isAllowed = true;
                      }
                    });
                  }
                }
              });
            }
  
            setSelectedPermissions(allPermissionsMap);
          });
        } else {
          // For new role, initialize all permissions as unchecked
          const initialPermissions = {};
          Permissionsdata?.forEach(perm => {
            initialPermissions[perm.permissionId] = {
              permissionId: perm.permissionId,
              permissionName: perm.permissionName,
              isAllowed: false,
              subPermissions: perm.subPermissions.map(sub => ({
                subPermissionId: sub.subPermissionId,
                subPermissionName: sub.subPermissionName,
                isAllowed: false
              }))
            };
          });
          setSelectedPermissions(initialPermissions);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
        setInitialLoadComplete(true);
      }
    };
    
    fetchData();
  }, [dispatch, roleId]);

  const handleMainPermissionChange = (permissionId) => {
    setSelectedPermissions(prev => {
      const currentPermission = prev[permissionId];
      const newIsAllowed = !currentPermission?.isAllowed;
  
      return {
        ...prev,
        [permissionId]: {
          ...currentPermission,
          isAllowed: newIsAllowed,
          subPermissions: currentPermission?.subPermissions?.map(sub => ({
            ...sub,
            isAllowed: newIsAllowed // Set all sub-permissions to match the main permission state
          })) || []
        }
      };
    });
  };

  const handleSubPermissionChange = (permissionId, subPermissionId) => {
    setSelectedPermissions(prev => ({
      ...prev,
      [permissionId]: {
        ...prev[permissionId],
        isAllowed: true, // Ensure main permission is checked when sub-permission is checked
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
      await dispatch(UpdateEmployeeRole(dataToSend)).unwrap();
      setIsSubmitting(false);
      dispatch(userRole()); // Refresh role list
      onBack(); // Return to list view
    } catch (error) {
      console.error("Failed to update role:", error);
      setIsSubmitting(false);
    }
  };

  if (error) {
    return (
      <div className="alert alert-danger m-3">
        Error loading data: {error.message || "Unknown error occurred"}
      </div>
    );
  }

  if (isLoading) {
    return <LatestSekeltonLoader />;
  }

  return (
    <div  style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0E3E9" }}>
       <div className="d-flex ms-4 gap-2 mt-4">
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
                  <p className="  mb-0 pb-0"
        style={{ 
          fontWeight: 600, 
          fontSize: '20px', 
          lineHeight: '100%', 
          letterSpacing: '0px', 
          color: "#000000",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {roleId ? "Edit Role" : "Add Role"}
      </p>   
       </div>
     
      
      <form id="frmUserRoles" className="ms-2 p-4 ps-3 mb-2" onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="row g-4">
            <div className="col-6 form-group">
              <label htmlFor="Name" className=" label-tag mb-2"
               
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
              <label htmlFor="Description" className=" label-tag mb-2"
                style={{
                  
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
            }}>
              Select Permission
            </h6>
          </div>    
          
          <div className="col-12 p-0">
            {Permissionsdata?.length > 0 ? (
              <div className="row gx-3">
                {Permissionsdata.map(permission => (
                <div key={permission.permissionId} className="col-md-6 col-lg-3 col-sm-6 mb-4">
                    <div className="p-2" style={{ border: '1px solid #E9EAEB', borderRadius: '20px' }}>
                      <div className="card-header d-flex justify-content-between align-items-center"
                        style={{
                          padding: '12px 16px',
                        }}
                      >
                        <div className="form-check  mt-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={selectedPermissions[permission.permissionId]?.isAllowed || false}
                            onChange={() => handleMainPermissionChange(permission.permissionId)}
                            style={{
                              width: '18px',
                              height: '18px',
                              marginTop:"2px"
                            }}
                          />
                          <label className=" form-check-Permissions " >
                            {permission.permissionName}
                          </label>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          {permission.subPermissions?.map(subPermission => (
                            <div key={subPermission.subPermissionId} className="col-md-4 col-lg-3 col-sm-4 mb-2">
                              <div className="ms-3">
                                <label className="form-check-label ">
                                  {subPermission.subPermissionName}
                                </label>
                                <div className=" form-check  form-switch ">
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
        </div>

        <div className="d-flex justify-content-center mt-3">
        
          <button
            type="submit"
            id="btnSave"
            className="save-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                {roleId ? "Updating..." : "Adding..."}
              </>
            ) : (
              roleId ? "Update Role" : "Add Role"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRoleModal;