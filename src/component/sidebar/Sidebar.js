import React, { useState, useRef, useEffect } from "react";

import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import CloseButton from 'react-bootstrap/CloseButton';
import { Link  } from 'react-router-dom';

// import { IoSettingsOutline, GoQuestion, GoBell } from 'react-icons/all';

const Sidebar = (
  { onIconClick, isSidebarExpanded , toggleSidebar  }
) => {
  

  
  return (
    <>
      <div className="container-fluid mt-1">
        <div
          className={` ${
            isSidebarExpanded ? "stickyside-bar" : "stickyside-bar   pt-4"
          }`}
        >
          <div>
            <div
              className={`${
                isSidebarExpanded ? "stickyside-bar" : "stickyside-bar "
              }`}
            >
              <div>
                <div
                 className="container-fluid "
                >
                  <div className=" d-flex flex-column">
                    <div>
                      <div className="title-text d-flex align-items-center mb-2  ">
                        <h4
                          className="sidebar-title mb-0 flex-grow-1 mt-0 pt-0"
                        >
                          <span
                           className="sm-text mt-0 pt-0"
                          >
                            HR
                          </span>
                          <span
                           
                          >
                            Admin
                          </span>
                        </h4>
                        <div onClick={toggleSidebar}
                        className="crossbutton"
                        >
                        <CloseButton />
                        </div>
                      </div>
                      <div className="main-menu  mt-4 flex-grow-6">
                        <ul
                          className={`  ${
                            isSidebarExpanded
                              ? " menu-list ps-3 "
                              : "menu-list ps-3"
                          }`}
                        >
                          <li
                           className="divider py-2 lh-sm"
                          >
                            <span
                              className="small"
                              style={{ fontSize: "12px" }}
                            >
                              MAIN
                            </span>
                            <br />{" "}
                            <small
                              className="text-muted"
                              style={{ fontSize: "11px", color: "grey" }}
                            >
                              {" "}
                            </small>
                          </li>
                          <li
                            className={`   ${
                              isSidebarExpanded ? "" : ""
                            }`}
                          >
                            <div className="collapsed">
                              <div className="row">
                                <div
                                  onClick={() => onIconClick(1)}
                                >
                                  <span
                                    className={`  ${
                                      isSidebarExpanded
                                        ? "m-link active ps-0 ms-1"
                                        : "m-link active ps-0 ms-1"
                                    }`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      fill="currentColor"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2 1C1.46957 1 0.960859 1.21071 0.585786 1.58579C0.210714 1.96086 0 2.46957 0 3L0 13C0 13.5304 0.210714 14.0391 0.585786 14.4142C0.960859 14.7893 1.46957 15 2 15H14C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13V3C16 2.46957 15.7893 1.96086 15.4142 1.58579C15.0391 1.21071 14.5304 1 14 1H2ZM1 3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8946 14.2652 14 14 14H2C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13V3ZM2 5.5C2 5.36739 2.05268 5.24021 2.14645 5.14645C2.24021 5.05268 2.36739 5 2.5 5H6C6.13261 5 6.25979 5.05268 6.35355 5.14645C6.44732 5.24021 6.5 5.36739 6.5 5.5C6.5 5.63261 6.44732 5.75979 6.35355 5.85355C6.25979 5.94732 6.13261 6 6 6H2.5C2.36739 6 2.24021 5.94732 2.14645 5.85355C2.05268 5.75979 2 5.63261 2 5.5ZM2 8.5C2 8.36739 2.05268 8.24021 2.14645 8.14645C2.24021 8.05268 2.36739 8 2.5 8H6C6.13261 8 6.25979 8.05268 6.35355 8.14645C6.44732 8.24021 6.5 8.36739 6.5 8.5C6.5 8.63261 6.44732 8.75979 6.35355 8.85355C6.25979 8.94732 6.13261 9 6 9H2.5C2.36739 9 2.24021 8.94732 2.14645 8.85355C2.05268 8.75979 2 8.63261 2 8.5ZM2 10.5C2 10.3674 2.05268 10.2402 2.14645 10.1464C2.24021 10.0527 2.36739 10 2.5 10H6C6.13261 10 6.25979 10.0527 6.35355 10.1464C6.44732 10.2402 6.5 10.3674 6.5 10.5C6.5 10.6326 6.44732 10.7598 6.35355 10.8536C6.25979 10.9473 6.13261 11 6 11H2.5C2.36739 11 2.24021 10.9473 2.14645 10.8536C2.05268 10.7598 2 10.6326 2 10.5Z"
                                      />
                                      <path
                                        class="fill-secondary"
                                        color="rgb(0, 180, 183)"
                                        d="M8.5 11C8.5 11 8 11 8 10.5C8 10 8.5 8.5 11 8.5C13.5 8.5 14 10 14 10.5C14 11 13.5 11 13.5 11H8.5ZM11 8C11.3978 8 11.7794 7.84196 12.0607 7.56066C12.342 7.27936 12.5 6.89782 12.5 6.5C12.5 6.10218 12.342 5.72064 12.0607 5.43934C11.7794 5.15804 11.3978 5 11 5C10.6022 5 10.2206 5.15804 9.93934 5.43934C9.65804 5.72064 9.5 6.10218 9.5 6.5C9.5 6.89782 9.65804 7.27936 9.93934 7.56066C10.2206 7.84196 10.6022 8 11 8V8Z"
                                      />
                                    </svg>
                                  </span>
                                  <Link className="sidbar-link" to="/dashboard">
                                  <button
                                    className="ms-2"
                                    style={{
                                      fontSize: "15px",
                                      // color: "rgb(0, 180, 183)",
                                    }}
                                  >
                                    FTE Calculation
                                  </button></Link>
                                  
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="collapsed ">
                              <div
                                class=" d-flex pointer-cursor "
                                data-bs-toggle="collapse"
                                data-bs-target="#menu-Admin"
                                href="#"
                              >
                                <div
                                  className={` ${
                                    isSidebarExpanded ? "ms-1" : "ms-1"
                                  }`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 1.288L14.842 6.848L12.267 15H3.733L1.158 6.847L8 1.288ZM16 6.5L8 0L0 6.5L3 16H13L16 6.5Z" />
                                    <path
                                      class="fill-secondary"
                                      color="rgb(0, 180, 183)"
                                      d="M5.5 12C5.5 12 5 12 5 11.5C5 11 5.5 9.5 8 9.5C10.5 9.5 11 11 11 11.5C11 12 10.5 12 10.5 12H5.5ZM8 9C8.39782 9 8.77936 8.84196 9.06066 8.56066C9.34196 8.27936 9.5 7.89782 9.5 7.5C9.5 7.10218 9.34196 6.72064 9.06066 6.43934C8.77936 6.15804 8.39782 6 8 6C7.60218 6 7.22064 6.15804 6.93934 6.43934C6.65804 6.72064 6.5 7.10218 6.5 7.5C6.5 7.89782 6.65804 8.27936 6.93934 8.56066C7.22064 8.84196 7.60218 9 8 9V9Z"
                                    />
                                  </svg>
                                </div>
                                <div
                                  className={` d-flex justify-content-between col-lg-10 pointer-cursor   ${
                                    isSidebarExpanded ? "ms-2" : "ms-2"
                                  }`}
                                >
                                  <div
                                    className={`  ${
                                      isSidebarExpanded ? "text6" : "  text6"
                                    }`}
                                  >
                                    Hr Admin
                                  </div>
                                  <div
                                    
                                  >
                                    <MdKeyboardArrowRight size={23} />
                                  </div>
                                </div>
                              </div>
                              <ul
                                id="menu-Admin"
                                className={`  ${
                                  isSidebarExpanded
                                    ? " sub-menu submenu ps-2 mt-1 collapse"
                                    : " sub-menu submenu ps-2 mt-1 collapse"
                                }`}
                              >
                                {/* <li>
                                  <div class="collapsed  ">
                                    <div class="row justify-content-between">
                                     <button
                                        class="m-link row"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-Designation"
                                        href="#"
                                      >
                                        <div
                                          className=" d-flex justify-content-between   pointer-cursor  col-lg-12 ms-1"
                                        >
                                          <span
                                           className="ms-2  text6"
                                          >
                                            Job-Title
                                          </span>
                                          <span
                                          >
                                            <MdKeyboardArrowRight size={23} />
                                          </span>
                                        </div>
                                      </button>
                                    </div>

                                    <ul
                                      className="sub-menu  submenu  ms-1 collapse"
                                      id="menu-Designation"
                                    >
                                      <li style={{ border: "none" }}>
                                      <Link className="sidbar-link" to="/addjobtitle">
                                        <h1
                                          className="ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(2)
                                          }
                                        >
                                          Add Job-Title
                                        </h1>
                                        </Link>
                                      </li>
                                      <li style={{ border: "none" }}>
                                      <Link className="sidbar-link" to="/jobtitlelist">

                                        <h1
                                          className=" ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(3)
                                          }
                                        >
                                          Job Title-List
                                        </h1>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li> */}
                                <li>
                                  <div class="collapsed  ">
                                    <div class="row justify-content-between">
                                      <button
                                        class="m-link row"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-employee"
                                        href="#"
                                      >
                                        <div
                                          className={` d-flex justify-content-between   pointer-cursor  col-lg-12 ${
                                            isSidebarExpanded ? "ms-1" : "ms-1"
                                          }`}
                                        >
                                          <span
                                         className="ms-2  text6"

                                          >
                                            Employee-type
                                          </span>
                                          <span
                                            
                                          >
                                            <MdKeyboardArrowRight size={23} />
                                          </span>
                                        </div>
                                      </button>
                                    </div>

                                    <ul
                                      className="sub-menu  submenu  ms-1 collapse"
                                      id="menu-employee"
                                    >
                                      <li style={{ border: "none" }}>
                                      <Link className="sidbar-link" to="/addemployeetype">

                                        <h1
                                          className="ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(4)
                                          }
                                        >
                                          Add Employee-type
                                        </h1>
                                        </Link>
                                      </li>
                                      <li style={{ border: "none" }}>
                                      <Link className="sidbar-link" to="/employeetypelist">

                                        <h1
                                          className=" ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(5)
                                          }
                                        >
                                          Employee-type list
                                        </h1>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div class="collapsed  ">
                                    <div class="row justify-content-between">
                                      <button
                                        class="m-link row"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-Department"
                                        href="#"
                                      >
                                        <div
                                          className={` d-flex justify-content-between   pointer-cursor  col-lg-12 ${
                                            isSidebarExpanded ? "ms-1" : "ms-1"
                                          }`}
                                        >
                                          <span
                                            className="ms-2  text6"
                                          >
                                            Department
                                          </span>
                                          <span
                                           
                                          >
                                            <MdKeyboardArrowRight size={23} />
                                          </span>
                                        </div>
                                      </button>
                                    </div>
                                    <ul
                                      className="sub-menu  submenu  ms-1 collapse"
                                      id="menu-Department"
                                    >
                                      <li>
                                      <Link className="sidbar-link" to="/department">

                                        <h1
                                          className="ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(6)
                                          }
                                        >
                                          Add Department
                                        </h1>
                                        </Link>
                                      </li>
                                      <li>
                                      <Link className="sidbar-link" to="/departmentlist">

                                        <h1
                                          className=" ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(7)
                                          }
                                        >
                                          Department-List
                                        </h1>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div class="collapsed  ">
                                    <div class="row justify-content-between">
                                      <button
                                        class="m-link row"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-subdepartment"
                                        href="#"
                                      >
                                        <div
                                          className={` d-flex justify-content-between   pointer-cursor  col-lg-12 ${
                                            isSidebarExpanded ? "ms-1" : "ms-1"
                                          }`}
                                        >
                                          <span
                                                                                        className="ms-2  text6"

                                          >
                                            SubDepartment
                                          </span>
                                          <span
                                           
                                          >
                                            <MdKeyboardArrowRight size={23} />
                                          </span>
                                        </div>
                                      </button>
                                    </div>
                                    <ul
                                      className="sub-menu  submenu  ms-1 collapse"
                                      id="menu-subdepartment"
                                    >
                                      <li>
                                      <Link className="sidbar-link" to="/subdepartment">
                                        <h1
                                          className="ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(8)
                                          }
                                        >
                                          Add SubDepartment
                                        </h1>
                                        </Link>
                                      </li>
                                      <li>
                                      <Link className="sidbar-link" to="/subdepartmentlist">
                                        <h1
                                          className=" ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(9)
                                          }
                                        >
                                          SubDepartment-List
                                        </h1>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div class="collapsed  ">
                                    <div class="row justify-content-between">
                                      <button
                                        class="m-link row"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-Project"
                                        href="#"
                                      >
                                        <div
                                          className={` d-flex justify-content-between   pointer-cursor  col-lg-12 ${
                                            isSidebarExpanded ? "ms-1" : "ms-1"
                                          }`}
                                        >
                                          <span
                                                                                       className="ms-2  text6"

                                          >
                                            Project
                                          </span>
                                          <span
                                            
                                          >
                                            <MdKeyboardArrowRight size={23} />
                                          </span>
                                        </div>
                                      </button>
                                    </div>
                                    <ul
                                      className="sub-menu  submenu  ms-1 collapse"
                                      id="menu-Project"
                                    >
                                      <li>
                                      <Link className="sidbar-link" to="/project">
                                        <h1
                                          className="ms-3 pt-0 mt-0 submenutext"
                                          onClick={() => onIconClick(10)}
                                        >
                                          Add Project
                                        </h1>
                                        </Link>
                                      </li>
                                      <li style={{ border: "none" }}>
                                      <Link className="sidbar-link" to="/projectlist">
                                        <h1
                                          className=" ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(11)
                                          }
                                        >
                                          Project list
                                        </h1>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div class="collapsed  ">
                                    <div class="row justify-content-between">
                                      <button
                                        class="m-link row"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-Team"
                                        href="#"
                                      >
                                        <div
                                          className={` d-flex justify-content-between   pointer-cursor  col-lg-12 ${
                                            isSidebarExpanded ? "ms-1" : "ms-1"
                                          }`}
                                        >
                                          <span
                                                                                       className="ms-2  text6"

                                          >
                                            Team
                                          </span>
                                          <span
                                            
                                          >
                                            <MdKeyboardArrowRight size={23} />
                                          </span>
                                        </div>
                                      </button>
                                    </div>
                                    <ul
                                      className="sub-menu  submenu  ms-1 collapse"
                                      id="menu-Team"
                                    >
                                      <li style={{ border: "none" }}>
                                      <Link className="sidbar-link" to="/team">
                                        <h1
                                          className="ms-3 pt-0 mt-0 submenutext"
                                          onClick={() => onIconClick(12)}
                                        >
                                          Add Team
                                        </h1>
                                        </Link>
                                      </li>
                                      <li style={{ border: "none" }}>
                                      <Link className="sidbar-link" to="/teamlist">
                                        <h1
                                          className=" ms-3 pt-0 mt-0 submenutext"
                                          onClick={() =>
                                            onIconClick(13)
                                          }
                                        >
                                          Team list
                                        </h1>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class="collapsed ">
                              <div
                                class=" d-flex pointer-cursor "
                                data-bs-toggle="collapse"
                                data-bs-target="#menu-Applications"
                                href="#"
                              >
                                <div
                                  className={` ${
                                    isSidebarExpanded ? "ms-1" : "ms-1"
                                  }`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                    <path
                                      class="fill-secondary"
                                      color="rgb(0, 180, 183)"
                                      d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                                    />
                                  </svg>
                                </div>
                                <div
                                  className={` d-flex justify-content-between col-lg-10 pointer-cursor   ${
                                    isSidebarExpanded ? "ms-2" : "ms-2"
                                  }`}
                                >
                                  <div
                                                                               className=" text6"

                                  >
                                    User Management
                                  </div>
                                  <div
                                   
                                  >
                                    <MdKeyboardArrowRight size={23} />
                                  </div>
                                </div>
                              </div>
                              <ul
                                className="sub-menu  submenu collapse"
                                id="menu-Applications"
                              >
                                <li>
                                <Link className="sidbar-link" to="/allusers">
                                  <h1
                                    className=" ms-2 pt-0 mt-0 submenutext"
                                    onClick={() => onIconClick(14)}
                                  >
                                    All Users
                                  </h1>
                                  </Link>
                                </li>
                                <li>
                                <Link className="sidbar-link" to="/addusers">
                                  <h1
                                    className=" ms-2 pt-0 mt-0 submenutext "
                                    onClick={() => onIconClick(15)}
                                  >
                                    Add Users
                                  </h1>
                                  </Link>
                                </li>
                                <li>
                                <Link className="sidbar-link" to="/rolelist">
                                  <h1
                                    className=" ms-2 pt-0 mt-0 submenutext "
                                    onClick={() => onIconClick(16)}
                                  >
                                    Role List
                                  </h1>
                                  </Link>
                                </li>
                                <li>
                                <Link className="sidbar-link" to="/addrole">
                                  <h1
                                    className=" ms-2 pt-0 mt-0 submenutext "
                                    onClick={() => onIconClick(17)}
                                  >
                                    Add Role
                                  </h1>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class="collapsed ">
                              <div
                                class=" d-flex pointer-cursor "
                                data-bs-toggle="collapse"
                                data-bs-target="#menu-Account"
                                href="#"
                              >
                                <div
                                  className={` ${
                                    isSidebarExpanded ? "ms-1" : "ms-1"
                                  }`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2 1C1.46957 1 0.960859 1.21071 0.585786 1.58579C0.210714 1.96086 0 2.46957 0 3L0 13C0 13.5304 0.210714 14.0391 0.585786 14.4142C0.960859 14.7893 1.46957 15 2 15H14C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13V3C16 2.46957 15.7893 1.96086 15.4142 1.58579C15.0391 1.21071 14.5304 1 14 1H2ZM1 3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8946 14.2652 14 14 14H2C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13V3ZM2 5.5C2 5.36739 2.05268 5.24021 2.14645 5.14645C2.24021 5.05268 2.36739 5 2.5 5H6C6.13261 5 6.25979 5.05268 6.35355 5.14645C6.44732 5.24021 6.5 5.36739 6.5 5.5C6.5 5.63261 6.44732 5.75979 6.35355 5.85355C6.25979 5.94732 6.13261 6 6 6H2.5C2.36739 6 2.24021 5.94732 2.14645 5.85355C2.05268 5.75979 2 5.63261 2 5.5ZM2 8.5C2 8.36739 2.05268 8.24021 2.14645 8.14645C2.24021 8.05268 2.36739 8 2.5 8H6C6.13261 8 6.25979 8.05268 6.35355 8.14645C6.44732 8.24021 6.5 8.36739 6.5 8.5C6.5 8.63261 6.44732 8.75979 6.35355 8.85355C6.25979 8.94732 6.13261 9 6 9H2.5C2.36739 9 2.24021 8.94732 2.14645 8.85355C2.05268 8.75979 2 8.63261 2 8.5ZM2 10.5C2 10.3674 2.05268 10.2402 2.14645 10.1464C2.24021 10.0527 2.36739 10 2.5 10H6C6.13261 10 6.25979 10.0527 6.35355 10.1464C6.44732 10.2402 6.5 10.3674 6.5 10.5C6.5 10.6326 6.44732 10.7598 6.35355 10.8536C6.25979 10.9473 6.13261 11 6 11H2.5C2.36739 11 2.24021 10.9473 2.14645 10.8536C2.05268 10.7598 2 10.6326 2 10.5Z"
                                    />
                                    <path
                                      class="fill-secondary"
                                      color="rgb(0, 180, 183)"
                                      d="M8.5 11C8.5 11 8 11 8 10.5C8 10 8.5 8.5 11 8.5C13.5 8.5 14 10 14 10.5C14 11 13.5 11 13.5 11H8.5ZM11 8C11.3978 8 11.7794 7.84196 12.0607 7.56066C12.342 7.27936 12.5 6.89782 12.5 6.5C12.5 6.10218 12.342 5.72064 12.0607 5.43934C11.7794 5.15804 11.3978 5 11 5C10.6022 5 10.2206 5.15804 9.93934 5.43934C9.65804 5.72064 9.5 6.10218 9.5 6.5C9.5 6.89782 9.65804 7.27936 9.93934 7.56066C10.2206 7.84196 10.6022 8 11 8V8Z"
                                    />
                                  </svg>
                                </div>
                                <div
                                  className={` d-flex justify-content-between col-lg-10 pointer-cursor   ${
                                    isSidebarExpanded ? "ms-1" : "ms-1"
                                  }`}
                                >
                                  <div
                                                                                className="  ms-2 text6"

                                  >
                                    Estimation
                                  </div>
                                  <div
                                    
                                  >
                                    <MdKeyboardArrowRight size={23} />
                                  </div>
                                </div>
                              </div>

                              <ul
                                class="sub-menu  submenu collapse"
                                id="menu-Account"
                              >
                                <li>
                                <Link className="sidbar-link" to="/estimation">
                                  <h1
                                    className=" ms-2 pt-0 mt-0 submenutext"
                                    onClick={() => onIconClick(18)}
                                  >
                                    Estimation
                                  </h1>
                                  </Link>
                                </li>
                                <li>
                                <Link className="sidbar-link" to="/estimationreport">
                                  <h1
                                    className=" ms-2 pt-0 mt-0 submenutext "
                                    onClick={() =>
                                      onIconClick(19)
                                    }
                                  >
                                    Estimation Report
                                  </h1>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class="collapsed ">
                              <div
                                class=" d-flex pointer-cursor "
                                data-bs-toggle="collapse"
                                data-bs-target="#menu-Clients"
                                href="#"
                              >
                                <div
                                  className={` ${
                                    isSidebarExpanded ? "ms-1" : ""
                                  }`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M12.136 0.326024C12.3571 0.270728 12.5878 0.266523 12.8107 0.313728C13.0337 0.360933 13.2429 0.458308 13.4226 0.59846C13.6023 0.738612 13.7476 0.917858 13.8477 1.12259C13.9477 1.32732 13.9998 1.55215 14 1.78002V3.00002H14.5C14.8978 3.00002 15.2794 3.15806 15.5607 3.43936C15.842 3.72067 16 4.1022 16 4.50002V13.5C16 13.8978 15.842 14.2794 15.5607 14.5607C15.2794 14.842 14.8978 15 14.5 15H1.5C1.10218 15 0.720644 14.842 0.43934 14.5607C0.158035 14.2794 9.80916e-08 13.8978 9.80916e-08 13.5V4.50002C-0.000139461 4.11388 0.148642 3.74255 0.415377 3.46334C0.682113 3.18412 1.04625 3.01853 1.432 3.00102L12.136 0.326024ZM5.562 3.00002H13V1.78002C12.9998 1.70416 12.9824 1.62933 12.949 1.5612C12.9156 1.49307 12.8672 1.43343 12.8074 1.38679C12.7475 1.34016 12.6779 1.30775 12.6036 1.29202C12.5294 1.2763 12.4526 1.27767 12.379 1.29602L5.562 3.00002ZM1.5 4.00002C1.36739 4.00002 1.24021 4.0527 1.14645 4.14647C1.05268 4.24024 1 4.36742 1 4.50002V13.5C1 13.6326 1.05268 13.7598 1.14645 13.8536C1.24021 13.9473 1.36739 14 1.5 14H14.5C14.6326 14 14.7598 13.9473 14.8536 13.8536C14.9473 13.7598 15 13.6326 15 13.5V4.50002C15 4.36742 14.9473 4.24024 14.8536 4.14647C14.7598 4.0527 14.6326 4.00002 14.5 4.00002H1.5Z" />
                                    <path
                                      class="fill-secondary"
                                      color="rgb(0, 180, 183)"
                                      d="M5.5 12C5.5 12 5 12 5 11.5C5 11 5.5 9.5 8 9.5C10.5 9.5 11 11 11 11.5C11 12 10.5 12 10.5 12H5.5ZM8 9C8.39782 9 8.77936 8.84196 9.06066 8.56066C9.34196 8.27936 9.5 7.89782 9.5 7.5C9.5 7.10218 9.34196 6.72064 9.06066 6.43934C8.77936 6.15804 8.39782 6 8 6C7.60218 6 7.22064 6.15804 6.93934 6.43934C6.65804 6.72064 6.5 7.10218 6.5 7.5C6.5 7.89782 6.65804 8.27936 6.93934 8.56066C7.22064 8.84196 7.60218 9 8 9V9Z"
                                    />
                                  </svg>
                                </div>
                                <div
                                  className={` d-flex justify-content-between col-lg-10 pointer-cursor   ${
                                    isSidebarExpanded ? "ms-1" : "ms-1"
                                  }`}
                                >
                                  <div
                                                                               className="ms-2  text6"

                                  >
                                    Costing
                                  </div>
                                  <div
                                   
                                  >
                                    <MdKeyboardArrowRight size={23} />
                                  </div>
                                </div>
                              </div>
                              <ul
                                class="sub-menu  submenu collapse"
                                id="menu-Clients"
                              >
                                <li>
                                <Link className="sidbar-link" to="/costing">
                                  <h1
                                    className=" ms-2 pt-0 mt-0 submenutext"
                                    onClick={() => onIconClick(20)}
                                  >
                                    Costing
                                  </h1>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          {/* <li>
                            <div className="collapsed ">
                              <div
                                className="m-link row"
                                data-bs-toggle="collapse"
                                data-bs-target="#menu-Employees"
                                href="#"
                              ></div>
                              <div
                                class=" d-flex pointer-cursor "
                                data-bs-toggle="collapse"
                                data-bs-target="#menu-Employees"
                                href="#"
                              >
                                <div
                                  className={` ${
                                    isSidebarExpanded ? "ms-1" : ""
                                  }`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M15 14C15 14 16 14 16 13C16 12 15 9 11 9C7 9 6 12 6 13C6 14 7 14 7 14H15ZM7.022 13C7.01461 12.999 7.00727 12.9976 7 12.996C7.001 12.732 7.167 11.966 7.76 11.276C8.312 10.629 9.282 10 11 10C12.717 10 13.687 10.63 14.24 11.276C14.833 11.966 14.998 12.733 15 12.996L14.992 12.998C14.9874 12.9988 14.9827 12.9995 14.978 13H7.022ZM11 7C11.5304 7 12.0391 6.78929 12.4142 6.41421C12.7893 6.03914 13 5.53043 13 5C13 4.46957 12.7893 3.96086 12.4142 3.58579C12.0391 3.21071 11.5304 3 11 3C10.4696 3 9.96086 3.21071 9.58579 3.58579C9.21071 3.96086 9 4.46957 9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7ZM14 5C14 5.39397 13.9224 5.78407 13.7716 6.14805C13.6209 6.51203 13.3999 6.84274 13.1213 7.12132C12.8427 7.3999 12.512 7.62087 12.1481 7.77164C11.7841 7.9224 11.394 8 11 8C10.606 8 10.2159 7.9224 9.85195 7.77164C9.48797 7.62087 9.15726 7.3999 8.87868 7.12132C8.6001 6.84274 8.37913 6.51203 8.22836 6.14805C8.0776 5.78407 8 5.39397 8 5C8 4.20435 8.31607 3.44129 8.87868 2.87868C9.44129 2.31607 10.2044 2 11 2C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5Z" />
                                    <path
                                      className="fill-secondary"
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M5.216 14C5.06776 13.6878 4.99382 13.3455 5 13C5 11.645 5.68 10.25 6.936 9.28C6.30909 9.08684 5.65595 8.99237 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.216Z"
                                    />
                                    <path
                                      class="fill-secondary"
                                      color="rgb(0, 180, 183)"
                                      d="M4.5 8C5.16304 8 5.79893 7.73661 6.26777 7.26777C6.73661 6.79893 7 6.16304 7 5.5C7 4.83696 6.73661 4.20107 6.26777 3.73223C5.79893 3.26339 5.16304 3 4.5 3C3.83696 3 3.20107 3.26339 2.73223 3.73223C2.26339 4.20107 2 4.83696 2 5.5C2 6.16304 2.26339 6.79893 2.73223 7.26777C3.20107 7.73661 3.83696 8 4.5 8V8Z"
                                    />
                                  </svg>
                                </div>
                                <div
                                  className={` d-flex justify-content-between col-lg-10 pointer-cursor   ${
                                    isSidebarExpanded ? "ms-1" : "ms-2"
                                  }`}
                                >
                                  <div
                                                                              className="ms-2  text6"

                                  >
                                    Setting
                                  </div>
                                  <div
                                  
                                  >
                                    <MdKeyboardArrowRight size={23} />
                                  </div>
                                </div>
                              </div>

                              <ul
                                className="sub-menu  submenu collapse"
                                id="menu-Employees"
                              >
                                <li>
                                  <h1 className=" ms-2 pt-0 mt-0 submenutext">
                                    AddEmployees
                                  </h1>
                                </li>
                                <li>
                                  <h1 className=" ms-2 pt-0 mt-0 submenutext ">
                                    EmployeesList
                                  </h1>
                                </li>
                                <li>
                                  <h1 className=" ms-2 pt-0 mt-0 submenutext">
                                    EmployeesDetail
                                  </h1>
                                </li>
                              </ul>
                            </div>
                          </li> */}
                        </ul>
                        {/* <ul
                          className={`  ${
                            isSidebarExpanded
                              ? "menu-list menulist mt-3 ps-3"
                              : "menu-list menulist mt-3 ps-3"
                          }`}
                        >
                          <li className="divider py-2 lh-sm">
                            <span
                              className="small"
                              style={{ fontSize: "12px" }}
                            >
                              RESOURCES
                            </span>
                            <br />{" "}
                            <small
                              className="text-muted"
                              style={{ fontSize: "11px" }}
                            >
                              Want to know about HRWHIZZ
                            </small>
                          </li>

                          <li>
                            <span
                              class="m-link pointer-cursor"
                              href="../docs/index.html"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  class="fill-secondary"
                                  color="rgb(0, 180, 183)"
                                  d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                                />
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                              </svg>
                              <span className="ms-2 text6">Documentation</span>
                            </span>
                          </li>
                          <li>
                            <span
                              class="m-link pointer-cursor"
                              href="../docs/doc-changelog.html"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  class="fill-secondary"
                                  color="rgb(0, 180, 183)"
                                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                              </svg>
                              <span className="ms-2 text6">Changelog</span>
                              <span id="Changelog"></span>
                            </span>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                    {/* <div
                     className="sidebarfooter"
                    >
                      <ul
                        className="bottommenu "
                      >
                        <li class="nav-item flex-fill p-2">
                          <a
                            class="d-inline-block w-100 color-400"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#ScheduleModal"
                            title="My Schedule"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                class="fill-secondary"
                                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                              ></path>
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                              <path
                                class="fill-secondary"
                                d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li class="nav-item flex-fill p-2">
                          <a
                            class="d-inline-block w-100 color-400"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#MynotesModal"
                            title="My notes"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                class="fill-secondary"
                                d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"
                              ></path>
                              <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
                            </svg>
                          </a>
                        </li>
                        <li class="nav-item flex-fill p-2">
                          <a
                            class="d-inline-block w-100 color-400"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#RecentChat"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                              <path
                                class="fill-secondary"
                                d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li class="nav-item flex-fill p-2">
                          <form id="frmSignOut">
                            <a
                              onclick="SignOutAction()"
                              id="btnSignOut"
                              class="d-inline-block w-100 color-400"
                              title="Sign-Out"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M7.5 1v7h1V1h-1z"></path>
                                <path
                                  class="fill-secondary"
                                  d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
                                ></path>
                              </svg>
                            </a>
                          </form>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
