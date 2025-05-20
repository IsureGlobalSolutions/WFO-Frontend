
import React, {  useState , useEffect} from "react";
import { Link } from "react-router-dom";
import StickyMenu from "../../../lib/StickyMenu";

import '../landingpage.css'
import { FaChevronRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {
  useEffect(() => {
    StickyMenu();
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light p-1 ">
  <div className="container ps-0 pt-0">
    <a className="navbar-brand navbarbrand  ps-0 ms-0  " href="index.html">
      <span className=" text-seconda textsecondary ">
      <svg height="30" viewBox="0 0 67 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-primary" d="M2.09,2v7H9.92V2H12V18.62H9.92v-7.8H2.09v7.8H0V2Z" />
           <path class="fill-primary" d="M13.27,2.2a20.49,20.49,0,0,1,4-.35c2.23,0,3.67.42,4.68,1.36a4.19,4.19,0,0,1,1.27,3.16,4.35,4.35,0,0,1-3.05,4.25v.08c1.25.44,2,1.63,2.38,3.35a26.53,26.53,0,0,0,1.25,4.57H21.65a21.62,21.62,0,0,1-1.08-4c-.48-2.3-1.35-3.16-3.24-3.24h-2v7.21H13.27Zm2.09,7.58h2.13c2.24,0,3.65-1.26,3.65-3.16,0-2.15-1.51-3.09-3.72-3.11a8.32,8.32,0,0,0-2.06.19Z" />
           <path class="fill-secondary" d="M28.87,15.17a1.44,1.44,0,0,0,1.55-.91,9.74,9.74,0,0,0,.92-2.79,29.86,29.86,0,0,0,.45-3.17A29.86,29.86,0,0,0,32,4.76a8,8,0,0,0-.32-2.27A3.35,3.35,0,0,0,29.69.17,2.38,2.38,0,0,0,28.2.07a4.14,4.14,0,0,0-1.65.8A7,7,0,0,0,25,2.66,10.16,10.16,0,0,0,23.5,6.84a10.44,10.44,0,0,0,0,3.3c.21,1.16.62,2,1.38,2.17.48.12.87-.12,1.18-.74a2.36,2.36,0,0,0,.25-1.29c0-.21-.06-.26-.17-.21l-.27.12A.65.65,0,0,1,25.1,10a3,3,0,0,1-.57-1.73,9.49,9.49,0,0,1,.77-4.76,4.47,4.47,0,0,1,2.07-2.41,1.3,1.3,0,0,1,1.14,0,3,3,0,0,1,1.25,2.15A11.71,11.71,0,0,1,30,5.4a25.14,25.14,0,0,1-.26,4.26c-.2,1.47-.46,2.92-.7,4.38C29,14.41,28.93,14.78,28.87,15.17Zm.22,3v.06a2.12,2.12,0,0,0,.24.2.9.9,0,0,0,1-.19,5.62,5.62,0,0,0,1.23-1.62,27.52,27.52,0,0,0,1.62-3.5,5.69,5.69,0,0,1,.23-.55c0,.68,0,1.36.07,2.05a7.23,7.23,0,0,0,.36,2c.18.53.46.83.83.82A1.82,1.82,0,0,0,36,16.65a10.38,10.38,0,0,0,1.3-2.22A34,34,0,0,0,38.64,11c.49-1.41,1-2.83,1.46-4.24.37-1,.74-2.08,1.12-3.1a2.81,2.81,0,0,1,.6-1.05c.18-.18.35-.13.45.18a3,3,0,0,1,.17.74,5.61,5.61,0,0,1,0,.82c0,.23,0,.33.16.31a.77.77,0,0,0,.28-.12,1.92,1.92,0,0,0,.79-1,1.14,1.14,0,0,0-.24-1.34A.91.91,0,0,0,43,2a2.62,2.62,0,0,0-2,1.08,12.74,12.74,0,0,0-1.88,3.43c-.52,1.29-1,2.66-1.37,4.07S37,13.52,36.52,15A10.7,10.7,0,0,1,36,16.29c-.11.26-.26.22-.35-.07a1.23,1.23,0,0,1-.08-.33c-.06-.69-.14-1.37-.16-2.06-.05-1.57-.06-3.14-.08-4.7,0-.93,0-1.86,0-2.79A1.91,1.91,0,0,0,35.31,6c-.05.07-.13.11-.16.2-.16.37-.32.73-.46,1.12-.34.93-.66,1.87-1,2.79s-.65,1.73-1,2.58a23.07,23.07,0,0,1-1.85,3.76A5.53,5.53,0,0,1,29.49,18,4,4,0,0,1,29.09,18.21Z" />     
          <path class="fill-primary" d="M42.36,6.64h1.28v5.17h0a2.7,2.7,0,0,1,.92-1.06,2.33,2.33,0,0,1,1.31-.43c.94,0,2.45.69,2.45,3.55V18.8H47.06V14c0-1.34-.42-2.47-1.62-2.47a1.92,1.92,0,0,0-1.72,1.51,2.2,2.2,0,0,0-.08.72v5H42.36Z" />       
          <path class="fill-primary" d="M51,11.19c0,.37-.3.66-.81.66a.7.7,0,0,1-.77-.66.73.73,0,0,1,.8-.68A.7.7,0,0,1,51,11.19ZM49.6,18.8V12.86h1.28V18.8Z" />    
          <path class="fill-primary" d="M52.12,17.92l3.18-4.87c.31-.45.6-.84.92-1.29v0H52.41V10.51h5.36v.94l-3.14,4.81a15.69,15.69,0,0,1-.9,1.3v0h4.11v1.2H52.12Z" />
          <path class="fill-primary" d="M58.87,17.92l3.18-4.87c.31-.45.6-.84.92-1.29v0H59.16V10.51h5.36v.94l-3.14,4.81a15.69,15.69,0,0,1-.9,1.3v0h4.11v1.2H58.87Z" />
          </svg>
      </span>
      <small className="textmuted d-flex mt-1">HR &amp; Project Management</small>
    </a>
    <div>
      <button className="navbar-toggle " type="button" data-bs-toggle="collapse" data-bs-target="#main_navbar">
    <div className="menu1">
    <span className="menuicon">
     <RxHamburgerMenu />
     </span>
    </div>
     </button></div>
    <div className="collapse navbar-collapse p-0" id="main_navbar">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-1"><a className="nav-link active  " aria-current="page" href="index.html">
          <span className="nav-linkactive"> Overview</span>
          </a></li>
        <li className="nav-item me-1"><a className="nav-link" aria-current="page" href="#">
        <span className="nav-linkactive"> Risks Management </span></a></li>
        <li className="nav-item me-1 dropdown">
          <a className="nav-link text-secondary textsecondary2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
         <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 400 , fontSize:"16px" , color:"#00B4B7" }}>
         Pages
          </span> 
            </a>
          <ul className="dropdown-menu border-0 shadow" style={{  color:"#00B4B7" }} >
            <li><a className="dropdown-item" href="../index.html">Dashboard</a></li>
            <li><a className="dropdown-item" href="blog.html">Blog</a></li>
            <li><a className="dropdown-item" href="app-blog-detail.html">Blog Detail</a></li>
            <li><a className="dropdown-item" href="https://themeforest.net/user/wrraptheme/portfolio">Portfolio</a></li>
            <li>
            </li>
            <li><a className="dropdown-item" href="../../auth-signin.html">Sign In</a></li>
            <li><a className="dropdown-item" href="../../onepgae-uikit/onepage.html">Landing Page</a></li>
          </ul>
        </li>
        <li className="nav-item me-1"><span className="nav-link text-secondary textsecondary2" href="../../docs/index.html" >
          <span  style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 400 , fontSize:"16px" , color:"#00B4B7" }}>
          Docs
          </span>
          </span></li>
      </ul>
    <div>
    <form className="d-flex ms-4">
      <Link to="/signin" className="navbar-right d-flex align-items-center gap-4"  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
            <div className="align-items-center aai-signup-in-links  d-lg-flex sigininbutton">
            <div className="icon-transitin " style={{fontFamily: 'Nunito, sans-serif'}}>Try for free</div>
          <div>
          {isHovered && 
<div className="icon-transition me-4">        
< FaChevronRight style={{color:'black'}}/>
              </div>
              }
          </div>
            </div>
          </Link>      </form>
    </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;
