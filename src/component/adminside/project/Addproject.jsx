

import React from 'react';
import '../adminscreens.css'
import ProjectAPI from './ProjectAPI';
import Projectlist from './Projectlist';

const Addproject = ({selectedModule}) => {
    
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
    <ProjectAPI/>
    <Projectlist/>
    
    </>

  )
}

export default Addproject