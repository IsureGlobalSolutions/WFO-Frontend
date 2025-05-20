import React from 'react'
import {ReactComponent as Icon} from '../../../assets/WfoAssets/SVG/DashboardLogo.svg';
import './DashboardFooter.css'
const DashboardFooter = () => {
  return (
    <>
<footer className="Fix-footer ">
  <div className="container-fluid">
    <div className="footer-row d-flex align-items-center justify-content-between flex-wrap">
      {/* Left Text */}
      <div className="Fix-footer-left">
        <p className="mb-0 text-muted text-center text-md-start">
           2025 <a href="https://www.isureglobalsolutions.com/" target="_blank" rel="noopener noreferrer" title="iSure Global Solutions" style={{ color: "#1B66B8", fontWeight: "600" }}>iSure</a>, All Rights Reserved.
        </p>
      </div>

      {/* Center Icon */}
      <div className="footer-center mb-2 d-flex justify-content-center">
        <Icon />
      </div>

      {/* Right Links */}
      <div className="footer-right d-flex justify-content-end align-items-center mt-2 ">
        <ul className="nav">
          <li className="nav-item"><a className="nav-link px-2 text-muted" href="#">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link px-2 text-muted" href="#">Licenses</a></li>
          <li className="nav-item"><a className="nav-link px-2 text-muted" href="#">Support</a></li>
          <li className="nav-item"><a className="nav-link px-2 text-muted" href="#">FAQs</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>




    </>
  )
}

export default DashboardFooter