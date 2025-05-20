import React from 'react'
import AllUsers from '../AllUsers'
import '../UserManage.css'
import AddUserDetail from '../AddUser/AddUserDetail'
import EmploymentDetails from '../AddUser/EmploymentDetails'
const UserDetail = ({selectedModule}) => {
  return (
<>
<div className="childsection pb-2">
  <h1>User Management</h1>
  </div>
  
  <div 
  className="d-flex p-3  topnavbar-card" 
  style={{
    backgroundColor: "#FFFFFF",
    boxShadow: "5.83px 5.83px 52.51px 0px #0000000D",
    // borderRadius: "10px",
    width: "100%",           // Full width
    justifyContent: "start", // Horizontally center content
    alignItems: "center",     // Vertically center content
    flexWrap: "nowrap",       // Prevent wrapping
    whiteSpace: "nowrap"      // Prevent text wrapping
  }}
>
  <h1 style={{ margin: 0 }}>Home</h1>
  <h1 className="ms-1 me-1" style={{ margin: 0 }}>/</h1>
  <h1 style={{ margin: 0 }}>User Management</h1>
  <h1 className="ms-1 me-1" style={{ margin: 0 }}>/</h1>
  <h1 style={{ color: "#4880FF", margin: 0 }}>{selectedModule}</h1>
</div>
    
     <AllUsers/>
 
</>    
  )
}

export default UserDetail