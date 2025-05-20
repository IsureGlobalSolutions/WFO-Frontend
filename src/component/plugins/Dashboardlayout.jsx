import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Sidebar from '../sidebar/Sidebar';
import "../../app/(sharedLayout)/dashboard/dashboard.css";
import {ReactComponent as Icon} from '../../assets/svg/hrwizzLogo2 copy.svg';
import { Link ,useLocation } from 'react-router-dom';
import Stickyheader from "../upperheader/Stickyheader";

import './dashboradlayout.css'
const Dashboardlayout = ({children}) => {
    const storedIcon = localStorage.getItem("selectedIcon");
    const [selectedIcon, setSelectedIcon] = useState(1);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [sidebarcloseopen, setsidebarcloseopen] = useState(false);
    const toggleSidebar = () => setsidebarcloseopen(!sidebarcloseopen);
    const location = useLocation();

    const handleIconClick = (id) => {
      setSelectedIcon(id);
      console.log("🚀 ~ handleIconClick ~ id:", id)
    //   localStorage.setItem("selectedIcon", icon);
    };
     
    useEffect(() => {
        // Update activeButton based on the current pathname
        if (location.pathname === '/dashboard') {
            setSelectedIcon(1);
        } else if (location.pathname === '/addjobtitle') {
            setSelectedIcon(2);
        }  else if (location.pathname === '/jobtitlelist') {
            setSelectedIcon(3);
        }  else if (location.pathname === '/addemployeetype') {
            setSelectedIcon(4);
        }  else if (location.pathname === '/employeetypelist') {
            setSelectedIcon(5);
        } else if (location.pathname === '/department') {
            setSelectedIcon(6);
        }  else if (location.pathname === '/departmentlist') {
            setSelectedIcon(7);
        }  else if (location.pathname === '/subdepartment') {
            setSelectedIcon(8);
        }  else if (location.pathname === '/subdepartmentlist') {
            setSelectedIcon(9);
        } else if (location.pathname === '/project') {
            setSelectedIcon(10);
        }  else if (location.pathname === '/projectlist') {
            setSelectedIcon(11);
        }  else if (location.pathname === '/team') {
            setSelectedIcon(12);
        }  else if (location.pathname === '/teamlist') {
            setSelectedIcon(13);
        } else if (location.pathname === '/allusers') {
            setSelectedIcon(14);
        }  else if (location.pathname === '/addusers') {
            setSelectedIcon(15);
        }  else if (location.pathname === '/rolelist') {
            setSelectedIcon(16);
        }  else if (location.pathname === '/addrole') {
            setSelectedIcon(17);
    }  else if (location.pathname === '/estimation') {
        setSelectedIcon(18);
    } else if (location.pathname === '/estimationreport') {
        setSelectedIcon(19);
    }  else if (location.pathname === '/costing') {
        setSelectedIcon(20);
    } 
        
    }, [location.pathname]);
  
  return (
    <>
    <div className="d-flex">
    <div className={`sidebar `} style={{backgroundColor: '#f8f6f2'}}>
    <Sidebar onIconClick={handleIconClick} isSidebarExpanded={isSidebarExpanded}       toggleSidebar={toggleSidebar}
 />

 </div>
 <div className={`content ${isSidebarExpanded ? "content-expanded" : "content-expanded"}`}>
     <div className="">
        {/* <Stickyheader
           isSidebarExpanded={isSidebarExpanded}
           toggleSidebar={toggleSidebar}
          sidebarcloseopen={sidebarcloseopen}
        /> */}
      </div>
 <div >
 <div className="dashboardlayout mt-2 m-4 me-0 ms-0 ps-4 "  >

{children}

</div>
 </div>


 <footer className="footer  ms-2 px-xl-4 px-sm-2 px-0 py-1">
  <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
    <p className="col-md-4 mb-0 text-muted">© 2025 <a href="https://www.isureglobalsolutions.com/" target="_blank" title="iSure Global Solutions" style={{color:"#1B66B8" , fontWeight:"600"}}>iSure</a>, All Rights Reserved.</p>
   <Icon/>
      <ul className="nav col-md-4 justify-content-center justify-content-lg-end">
      <li className="nav-item"><a className="nav-link px-2 text-muted">Portfolio</a></li>
      <li className="nav-item"><a className="nav-link px-2 text-muted">Licenses</a></li>
      <li className="nav-item"><a className="nav-link px-2 text-muted">Support</a></li>
      <li className="nav-item"><a className="nav-link px-2 text-muted">FAQs</a></li>
    </ul>
  </div>
</footer>

</div>

    </div>

    </>
  )
}
Dashboardlayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default Dashboardlayout