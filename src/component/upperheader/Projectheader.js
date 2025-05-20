import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './stickyheader.css';
import { RiDatabase2Line  } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight} from "react-icons/fa6";

import { BiSearchAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { BiCalendarWeek } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";

const Projectheader = () => {
  return (
    <div className='d-flex  pt-2  me-0' style={ {  borderRadius:'none'}}>
    <div className='col-lg-8 col-md-6 ms-0'>
      <div className='row ps-0'>
        <div className='col-md-2 col-lg-1 me-4  ps-0' >
          <div className='dropdown'>
            <h1
              className='dropdown-toggle3' 
              href='#'
              role='button'
            //   id='dropdownMenuLink'
            //   data-bs-toggle='dropdown'
            //   aria-expanded='false'
            >
              Project
            </h1>

          
          </div>
        </div>
        <div className='col-md-9 mt-1 col-lg-3  ps-0 d-flex' >
          <div className='slashicon'>
            <RiDatabase2Line className='headericon' />
          </div>
          <div className='slashicon ms-2 pe-2'>
            <BiSearchAlt className='headericon ms-2' />
            <span className='filter'> filter</span>
          </div>
        </div>
      </div>
    </div>
    <div className='col-lg-4 col-md-6 mt-1  d-flex justify-content-end ' >
      <div className='row'>
        <div className='col-12 col-lg-12 d-flex justify-content-between mb-2'>
        <div className='filter mt-1' style={{color:'black'}}><FaAngleLeft /></div> 
          <div className='filter mt-1' style={{color:'black'}}><FaAngleRight /></div> 
          <div className='slashicon'>
          <span className='filter m-3'> Today</span>
          </div>
         
          {/* <div className='slashicon' style={{marginLeft:'-8px'}}>
            <RiDatabase2Line class
            Name='headericon' />
          </div> */}
           <div className='slashicon ms-2'>
            <TiMessages className='week ms-1' />
            <span className='filter mt-1 me-2'> Manage Template</span>
            <RiArrowDropDownLine className='headericon mt-1 ' />

          </div>
          <div className='slashicon ms-2'>
            <BiDownload className='week ms-1' />
            <span className='filter mt-1 me-2'> import</span>
            <RiArrowDropDownLine className='headericon mt-1 ' />

          </div>
          <div className='slashicon  ms-2' style={{ backgroundColor:'#2E5FE8'}}>
          <FaPlus 
 className='plus'  />
          / </div> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projectheader