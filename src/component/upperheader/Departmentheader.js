import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './stickyheader.css';
import { RiDatabase2Line } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { BiCalendarWeek } from "react-icons/bi";
import { CiFolderOff } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";

const Departmentheader = () => {
  return (
    <div className='d-flex ms-4 ps-2 me-0'>
    <div className='col-lg-9 col-md-6 ms-0'>
      <div className='row'>
        <div className='col-md-2 col-lg-2 ps-0 '>
          <div className='dropdown'>
            <h1
              className='dropdown-togglee'
              
            >
              Department
            </h1>
{/* 
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
              <li>
                <a className='dropdown-item' href='#'>
                  Department
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Project                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Team
                </a>
              </li>
            </ul> */}
          </div>
        </div>
        <div className='col-md-6 mt-1 col-lg-10  d-flex' >
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
    <div className='col-lg-3 col-md-2 '>
      <div className='row'>
        <div className='col-12 col-lg-12 d-flex justify-content-between mb-2'>
        <div className='filter mt-1' style={{color:'black'}}><FaAngleLeft /></div> 
          <div className='filter mt-1' style={{color:'black'}}><FaAngleRight /></div> 
          <div className='slashicon'>
          <span className='filter m-3'> Today</span>
          </div>
          <div className='slashicon ms-2'>
            <BiCalendarWeek className='week ms-1' />
            <span className='filter mt-1'> Weeks</span>
            <RiArrowDropDownLine className='headericon mt-1 ' />

          </div>
          <div className='slashicon' style={{marginLeft:'-8px'}}>
            <RiDatabase2Line className='headericon' />
          </div>
          <div className='slashicon ' style={{marginLeft:'8px'}}>
            <CiFolderOff className='headericon' />
          </div>
          <div className='slashicon ' style={{marginLeft:'-8px' , backgroundColor:'#2E5FE8'}}>
          <FaPlus 
 className='plus'  />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Departmentheader