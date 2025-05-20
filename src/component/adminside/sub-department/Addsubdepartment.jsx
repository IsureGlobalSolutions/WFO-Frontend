import React, { useState , useEffect } from 'react';
import '../adminscreens.css';
import Stickyheader from '../../upperheader/Stickyheader';
import SubdepartmentAPI from './Subdepartmentapi';
import Subdepartmentlist from './Subdepartmentlist';
const Addsubdepartment = ({selectedModule}) => {
   
  return (
    <>
  <div className="childsection ">
  <h1>HR Admin</h1>
  </div>

  <div className="d-flex p-1 pt-2 mt-3 ps-4 pt-0 topnavbar-card" style={{backgroundColor:"#FFFFFF" ,  
      boxShadow:"5.83px 5.83px 52.51px 0px #0000000D"
 }} >
        <h1>Home </h1>
           <h1 className="ms-1 me-1">/</h1>
           <h1>HR Admin </h1>
           <h1 className="ms-1 me-1">/</h1>
           <h1 style={{color:"#4880FF" , 
           }}>{selectedModule}</h1>
     </div>
     <div style={{backgroundColor:"#FFFFFF",  marginTop:"2px"  }} >

     <div >
     <SubdepartmentAPI/>
     </div>
     </div>
    <Subdepartmentlist/>
 </>
  )
}


export default Addsubdepartment