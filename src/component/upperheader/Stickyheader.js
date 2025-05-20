import React, { useEffect, useState } from "react";
import "./stickyheader.css";
import { useDispatch } from "react-redux";
import {   signout} from "../../redux/features/auth/authSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import img35 from "../../assets/img/dashboard/profile_av.png";
import {ReactComponent as lightdark } from '../../assets/svg/lightdark.svg'
import {ReactComponent as Icon} from '../../assets/svg/hrwizzLogo2 copy.svg';

import {  useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
const Stickyheader = (  {isSidebarExpanded , toggleSidebar}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  

  const [firstName, setFirstName] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputClick = () => {
    setShowSuggestions(true);
    setdropdown(!dropdown);
  };

  const handleInputBlur = () => {
    setShowSuggestions(false);
    setdropdown(!dropdown);
  };
  const toggleSidebarVisibility = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const handleSignOut = () => {
    dispatch(signout())
      .then(() => {
        try {
          localStorage.removeItem('authToken');
        } catch (error) {
          console.error('Error removing authToken from localStorage:', error);
        }
        navigate('/signin')
      })
      .catch(error => {
        console.error("Error occurred during signout:", error);
        // Handle error gracefully (e.g., show error message to user)
      });
  };
  
  return (
    <>
     <header className="page-header px-xl-4 px-sm-2 ps-0 ms-0 px-0 py-lg-2 py-1">
        <div className="container-fluid">  
          <nav className="navbar">
            <div className={` d-flex align-item-end  justify-content-end topnavbar me-2  ${isSidebarExpanded ? "topnavbar-expanded" : ""}`}>
              <button
                type="button"
                className="btn btn-link d-xl-none d-block sidebar-mini-btn p-0 text-primary sidebar-toggle-btn"
                onClick={toggleSidebar} 
              >
                <span className="hamburger-icon pt-4">
                  
                    <GiHamburgerMenu
                    className="close-btn"
                      style={{ color: "orange", width: "28px", height: "52px" }}
                    />
                  
                </span>
              </button>
            </div>
           <div className="col-md-9">
           <Icon/>
           </div>
            <div className=" col-md-2 d-flex justify-content-end">
              <ul className="header-right justify-content-between d-flex align-items-center mb-0">
                <li>
                  <div className="dropdown morphing scale-left user-profile mx-lg-3 mx-2">
                    <a
                      className="nav-link dropdown-toggle rounded-circle after-none p-0 show"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <img className="avatar img-thumbnail rounded-circle shadow" src={img35} alt="#" />
                    </a>
                    <div className="dropdown-menu border-0 rounded-4 shadow p-0 show" data-bs-popper="static">
                      <div className="card border-0 w240">
                        <div className="card-body border-bottom d-flex">
                          <div className="flex-fill ms-3">
                            <h6 className="card-title mb-0">Super User</h6>
                            <span className="text-muted" />
                          </div>
                        </div>
                        <div className="list-group m-2 mb-3">
      <form id="frmSignOut">
        <a onClick={handleSignOut} id="btnSignOut" className="btn bg-secondary text-light text-uppercase rounded-0">
          Sign Out
        </a>
      </form>
    </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {isSidebarExpanded && <div className="sidebar-overlay" onClick={toggleSidebar}>
        <Sidebar/>
        </div>}


    </>
  );
};

export default Stickyheader;
