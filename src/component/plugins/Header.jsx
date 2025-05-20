import "../../assets/css/style.css";
import React, { useEffect  , useState} from 'react';
import { ReactComponent as ClosemenuIcon } from "../../assets/svgs/menuicons/closemenuicon.svg";
import { ReactComponent as ReverseArrow } from "../../assets/svgs/menuicons/reverseArrow.svg";
import { ReactComponent as Location } from "../../assets/svgs/menuicons/location.svg";
import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";
import { ReactComponent as Email } from "../../assets/svgs/menuicons/email.svg";
import { ReactComponent as Phone } from "../../assets/svgs/menuicons/phone.svg";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Icon } from '../../assets/svg/HRwhizzlogowhite.svg';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggleSer, setToggleSer] = useState(false);
  const [togglePage, setTogglePage] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  const toggleAgencey = () => {
    setToggle((prevState) => !prevState);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const toggleLight = () => {
    setToggle1((prevState) => !prevState);
  };

  const toggleDark = () => {
    setToggle2((prevState) => !prevState);
  };

  const toggleServices = () => {
    setToggleSer((prevState) => !prevState);
  };

  const togglePages = () => {
    setTogglePage((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    const body = document.body;
    const icon = document.querySelector(".tt-style-switch i");
    body.classList.toggle("dark");
    icon.classList.toggle(
      "bi-brightness-low-fill",
      body.classList.contains("dark")
    );
    icon.classList.toggle("bi-moon", !body.classList.contains("dark"));
    localStorage.setItem(
      "zenfy_theme",
      body.classList.contains("dark") ? "dark" : ""
    );
  };

  
  // const handleScroll = () => {
  //   console.log("Scroll event triggered"); // Debugging line
  //   const offset = window.scrollY;
  //   if (offset > 20) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };

  // useEffect(() => {
  //   console.log("Adding scroll event listener"); // Debugging line
  //   window.addEventListener('scroll', handleScroll);
  //   console.log("scroll" , scroll);
  //   return () => {
  //     console.log("Removing scroll event listener"); // Debugging line
  //     window.removeEventListener('scroll', handleScroll);
  //     console.log("scroll" , scroll);

  //   };
  // }, []); 
  // const handleScroll = () => {
  //   console.log("Scroll event triggered"); // Debugging line
  //   const topNav = document.querySelector(".header-area.style-2");

  //   if (topNav) {
  //     if (window.scrollY > 20) {
  //       topNav.classList.add("stickyscroll");
  //     } else {
  //       topNav.classList.remove("stickyscroll");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   console.log("Adding scroll event listener"); // Debugging line
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     console.log("Removing scroll event listener"); // Debugging line
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
 
  return (
    <>
      <div className="tt-style-switch index-dark" onClick={toggleDarkMode}>
        <i className="bi bi-brightness-low-fill"></i>
      </div>

      <div className="circle-container">
        <svg
          className="circle-progress svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <div className={`sidebar-menu ${sidebarOpen ? "active" : ""}`}>
        <div className="sidebar-menu-top-area">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="sidebar-menu-logo">
              <Link to="/" className="logo-dark">
                {/* <Logo /> */}
              </Link>
             
            </div>
            <div className="sidebar-menu-close" onClick={toggleSidebar}>
              <ClosemenuIcon />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="sidebar-menu-wrap">
                <ul className="main-menu">
                  <li>
                    <a href="#">Agency </a>
                    <span
                      className={`dropdown-icon2 `}
                      id="agency-main"
                      onClick={toggleAgencey}
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                    <ul
                      className={`submenu-list ${toggle ? "active" : ""} `}
                      id="agency1"
                    >
                      <li>
                        <Link to="#" className="sidbar-item-link">Light Version</Link>
                        <span
                          className="dropdown-icon2 two"
                          id="togglePlus"
                          onClick={toggleLight}
                        >
                          <i className="bi bi-plus"></i>
                        </span>
                        <ul
                          className={`submenu-list ${toggle1 ? "active" : ""}`}
                          id="toggleList"
                        >
                          <li>
                            <Link to="#" className="sidbar-item-link">
                              Startup Agency
                              <ReverseArrow />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Digital Marketing Agency
                              <ReverseArrow />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Saas Product
                              <ReverseArrow />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Creative Agency
                              <ReverseArrow />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              It Solution
                              <ReverseArrow />
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#">Dark Version</Link>
                        <span
                          className="dropdown-icon2 two"
                          id="togglePlus"
                          onClick={toggleDark}
                        >
                          <i className="bi bi-plus"></i>
                        </span>
                        <ul
                          className={`submenu-list ${toggle2 ? "active" : ""}`}
                          id="toggleList"
                        >
                          <li>
                            <Link to="#">
                              Startup Agency
                              <ReverseArrow />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Digital Marketing Agency
                              <ReverseArrow />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Saas Product
                              <ReverseArrow />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Creative Agency
                              <ReverseArrow />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              It Solution
                              <ReverseArrow />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Services</Link>
                    <span
                      className="dropdown-icon2"
                      id="services-main"
                      onClick={toggleServices}
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                    <ul
                      className={`submenu-list ${toggleSer ? "active" : ""}`}
                      id="services-list"
                    >
                      <li>
                        <Link to="/services">
                          Service style 01
                          <ReverseArrow />
                        </Link>
                      </li>

                      <li>
                        <Link to="/service-detail">
                          Service Details
                          <ReverseArrow />
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <span
                      className="dropdown-icon2"
                      id="pages-main"
                      onClick={togglePages}
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                    <ul
                      className={`submenu-list ${togglePage ? "active" : ""}`}
                      id="pages-list"
                    >
                      <li>
                        <Link to="/about">
                          About
                          <ReverseArrow />
                        </Link>
                      </li>

                      <li>
                        <Link to="/pricing">
                          Pricing Plan
                          <ReverseArrow />
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq">
                          Faq
                          <ReverseArrow />
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-lg-flex align-items-center d-none">
              <div className="sidebar-contact">
                <div className="getin-touch-area mb-60">
                  <h4>
                    Get in Touch
                    <ReverseArrow />
                  </h4>
                  <ul>
                    <li className="single-contact">
                      <div className="icon">
                        <Phone />
                      </div>
                      <div className="contact">
                        <span>Phone</span>
                        <h6>
                          <a href="tel:+9917636844563">+1 (210) 764 5137</a>
                        </h6>
                      </div>
                    </li>
                    <li className="single-contact">
                      <div className="icon">
                        <Email />
                      </div>
                      <div className="contact">
                        <span>Email Now</span>
                        <h6>
                          <a href="https://demo-egenslab.b-cdn.net/cdn-cgi/l/email-protection#543d3a323b14312c35392438313339353d387a373b39">
                            <span
                              className="__cf_email__"
                              data-cfemail="f59c9b939ab5908d94988599909298949c99db969a98"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </h6>
                      </div>
                    </li>
                    <li className="single-contact">
                      <div className="icon">
                        <Location />
                      </div>
                      <div className="contact">
                        <h6>Seventh Ave, 20th Floor New York, NY 10018</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="social-link-area">
                  <h6>
                    Social Link
                    <ReverseArrow />
                  </h6>
                  <ul className="social-area">
                    <li>
                      <a href="https://dribbble.com/">
                        <i className="bi bi-linkedin"></i> Linkedin
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/">
                        <i className="bi bi-instagram"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bi bi-pinterest"></i> Pinterest
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook"></i> Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
      <header className="header-area style-2 pt-0 mt-0 w-100" >
      <div className="container pt-0 mt-0 d-flex flex-nowrap align-items-center  justify-content-between">
        <div className="company-logo">
          <Link to="/" className="logo-dark">
            <Icon />
          </Link>
        </div>
        <div className="main-menu d-lg-flex d-none   jsutify-content-end align-items-start ">
          <ul className="menu-list">
            <li>
              <Link to="/" className="drop-down  sidbar-item-link">
                Home
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link to=" " className="drop-down sidbar-item-link">
                Services
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ServiecesList" className="sidbar-item-link">Services</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="#" className="drop-down sidbar-item-link">
                Pages
              </Link>
              
              <ul className="sub-menu">
                <li>
                  <Link to="/about" className="sidbar-item-link">About</Link>
                </li>
                <li>
                  <Link to="#" className="sidbar-item-link">Features</Link>
                </li>
                <li>
                  <Link to="#" className="sidbar-item-link">Shop</Link>
                  <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon"></i>
                  <i className="d-lg-none d-flex bi bi-plus dropdown-icon"></i>
                  <ul className="sub-menu">
                    <li>
                      <Link to="#" className="sidbar-item-link ">Product Details</Link>
                    </li>
                    <li>
                      <Link to="#" className="sidbar-item-link">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout" className="sidbar-item-link">CheckOut</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/pricing" className="sidbar-item-link">Pricing Plan</Link>
                </li>
                <li>
                  <Link to="/faq" className="sidbar-item-link">Faqs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="drop-down sidbar-item-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="sidebar-and-btn">
            <div className="sidebar-btn" onClick={toggleSidebar}>
              <MenuIcon />
            </div>
            <button
              className="primary-btn2"
              onClick={() => navigate('/signin')}
            >
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </header>
      </div>
      
    </>
  );
};

export default Header;
