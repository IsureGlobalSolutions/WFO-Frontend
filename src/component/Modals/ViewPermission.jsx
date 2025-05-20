import React from 'react'
import { Modal } from 'react-bootstrap';
import {ReactComponent as Icon} from '../../assets/WfoAssets/SVG/DashboardLogo.svg';


const ViewPermission = ({setActive , active,permissionData}) => {
  return (
       <Modal show={active} onHide={() => setActive(false)} centered size="lg" >
       <Modal.Body className="p-4 pt-3 " style={{backgroundColor:"#F8F8F8"}} >
         <div className="d-flex justify-content-between align-items-center mb-4 m-3 pb-3">
           {/* <h4 className="m-0 fw-bolder">Permissions</h4> */}
           <Icon/>
           <button
             className="btn-close"
             onClick={() => setActive(false)}
             aria-label="Close"
           />
         </div>


  <div className="col-12 py-4" style={{borderBottom:" 2px solid #97979733",borderTop: "2px solid #97979733"}}>
          {permissionData?.length > 0 ? (
            <div className="row gx-3">
              {permissionData.map(permission => (
                <div key={permission.permissionId} className="col-md-4 mb-4">
                  <div className="p-2" style={{ border: "1.1px solid #E9EAEB", borderRadius: '17px', backgroundColor:'white' }}>
                    <div className="card-header d-flex justify-content-between align-items-center"
                      style={{
                        // borderBottom: '1px solid #E9EAEB',
                        padding: '12px 16px',
                     
                      }}
                    >
                      <div className=" mt-1  flex-wrap">
                     
                        <p className="form-check-Permissions m-0 " style={{whiteSpace:'nowrap'}}>
                          {permission.permissionName}
                        </p>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        {permission.subPermissions?.map(subPermission => (
                          <div key={subPermission.subPermissionId} className="col-md-3 mb-2">
                            <div className="form-check">
                        
                              <label className="form-check-label ms-2">
                                {subPermission.subPermissionName}
                              </label>
                              <div className="form-check form-switch ms-2">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    checked
    // checked={
    //   selectedPermissions[permission.permissionId]?.subPermissions?.find(
    //     sub => sub.subPermissionId === subPermission.subPermissionId
    //   )?.isAllowed || false
    // }
    // onChange={() => handleSubPermissionChange(permission.permissionId, subPermission.subPermissionId)}
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
         </Modal.Body>
         </Modal>
  )
}

export default ViewPermission