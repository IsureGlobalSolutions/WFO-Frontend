import React from 'react'
// import Skeleton from "react-loading-skeleton";
import './SekeltonLoader.css'
import "react-loading-skeleton/dist/skeleton.css";
const LatestSekeltonLoader = () => {
  return (
<>
<div className="d-flex justify-content-start align-items-center " style={{ height: '200px' }}>

<div className="skeleton-container flex-column mt-3 ">
      <div className='d-flex'>
      <div className="skeleton-left">
        <div className="skeleton-square"></div>
      </div>
      <div className="skeleton-right d-flex flex-column justify-content-center ">
        <div className="skeleton-line skeleton-line-long"></div>
        <div className="skeleton-line skeleton-line-short"></div>
        {/* <div className="skeleton-line skeleton-line-long"></div> */}
      </div>
      </div>
     <div className='row mt-3 ms-1 col-md-11'>
     <div className="skeleton-line skeleton-line-medium"></div>
    <div className="skeleton-line skeleton-line-long"></div>
    <div className="skeleton-line skeleton-line-short"></div>
     </div>
    </div>


    </div>
</>
)
}

export default LatestSekeltonLoader